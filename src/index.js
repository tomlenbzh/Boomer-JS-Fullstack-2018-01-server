import App from './App';
import db from './models';

// await db.migrations();

// console.log(db);

const app = new App();

//var server = require('http').createServer(app.koaApp.callback())
//var io = require('socket.io')(server)

const IO = require('koa-socket');

const io = new IO();

io.attach(app.koaApp);

// function emitPlayers (room, players) {
//     console.log(room, players);
//     io.of(room).emit("players", {
//         players: players
//     })
// }

io.on('connection', (ctx) => {

    ctx.socket.on('join_room', (roomId) => {

        console.log('joinRoom =', roomId);
        // console.log('socket =', socket.socket);
        //Store RoomId
        ctx.socket.join(roomId.roomId)
        ctx.roomId = roomId.roomId;

        // console.log(ctx.socket.adapter.rooms[roomId.roomId].length);
        // ctx.socket.in(ctx.roomId).emit("players", {
        //     players: ctx.socket.adapter.rooms[roomId.roomId].length
        // })
        // emitPlayers(ctx.roomId, ctx.socket.adapter.rooms[roomId.roomId].length)
    })

    ctx.socket.on('leave_room', (roomId) => {
        console.log('leaveRoom =', roomId);
        ctx.socket.leave(roomId.roomId)
        ctx.roomId = "none";
    })

    ctx.socket.on('wez', () => {
        //increase the click count for the player and the room,
        //if click destroys room, send destroy message to all sockets
        console.log("wez")
        ctx.socket.to(ctx.roomId).emit("wez", {})
    })

    ctx.socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


app.start();

// import cluster from 'cluster';
// import os from 'os';
// import config from 'config';

// import App from './app';
// import db from './models';


// async function workMaster() {
//   const numWorkers = config.nbChildProcess || os.cpus().length;

//   await db.migrations();
//   await db.seeders();

//   /******************* Create child process *********************/
//   console.log('Master cluster setting up', numWorkers, 'workers...');
//   for (let i = 0; i < numWorkers; i += 1) {
//     cluster.fork();
//   }

//   cluster.on('online', (worker) => {
//     console.log('****************************Worker', worker.process.pid, ' is online');
//   });

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
//     console.log('Starting new worker');
//     cluster.fork();
//   });
// }

// function workChild() {
//   const app = new App();
//   app.start();
// }


// if (cluster.isMaster) {
//   workMaster();
// } else {
//   workChild();
// }