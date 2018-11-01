import App from './App';
import db from './models';

const app = new App();

const IO = require('koa-socket');

const io = new IO();

io.attach(app.koaApp);
const models = db.initModels();

io.on('connection', (ctx) => {
  ctx.socket.on('joinRoom', (params) => {
    console.log("joinRoom = ", params);
    if (ctx.roomId != params.roomId) {
      ctx.socket.join(params.roomId)
    }
    ctx.roomId = params.roomId;
    ctx.userId = params.userId;
    ctx.userPseudo = params.userPseudo;

    io.socket.to(ctx.roomId).emit("players", ctx.socket.adapter.rooms[params.roomId].length);
  })

  ctx.socket.on('leaveRoom', (params) => {
    io.socket.to(params.roomId).emit("players", ctx.socket.adapter.rooms[params.roomId].length - 1);
    ctx.socket.leave(params.roomId)
    ctx.roomId = "none";
  })

  ctx.socket.on('playerClick', async () => {
    if (await models.rooms.increaseCount({ models: models, id: ctx.roomId }) === 'destroy') {
      const score = await models.users.defeat({ userId: ctx.userId });
      ctx.socket.emit("score", score);
      io.socket.to(ctx.roomId).emit("destroy", {});
    } else {
      const score = await models.users.gainScore({ models: models, roomId: ctx.roomId, userId: ctx.userId });
      ctx.socket.emit("score", score);
    };
  })

  ctx.socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

async function deafeat(ctx) {
}

app.start();