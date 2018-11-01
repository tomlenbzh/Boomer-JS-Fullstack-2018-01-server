import App from './App';
import db from './models';

const app = new App();

const IO = require('koa-socket');

const io = new IO();

io.attach(app.koaApp);
const models = db.initModels();

io.on('connection', (ctx) => {
  ctx.socket.on('join_room', (params) => {
    ctx.socket.join(params.roomId)
    ctx.roomId = params.roomId;
    ctx.userId = params.userId;
    ctx.userPseudo = params.userPseudo;

    io.socket.to(ctx.roomId).emit("players", {
      players: ctx.socket.adapter.rooms[params.roomId].length
    })
  })

  ctx.socket.on('leave_room', (params) => {
    ctx.socket.leave(params.roomId)
    ctx.roomId = "none";
  })

  ctx.socket.on('wez', async () => {
    if (await models.rooms.increaseCount({ models: models, id: ctx.roomId }) === 'destroy') {
        console.log("emit destroy")
        io.socket.to(ctx.roomId).emit("destroy", { })            
    } else {
        console.log("emit alive")
    };
  })

  ctx.socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.start();