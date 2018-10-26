import App from './App';
import db from './models';

// await db.migrations();

// console.log(db);

const app = new App();

//var server = require('http').createServer(app.koaApp.callback())
//var io = require('socket.io')(server)

const IO = require( 'koa-socket' );

const io = new IO();

io.attach(app.koaApp);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.socket.on('join_room', function(roomId) {

        //Store RoomId

        socket.socket.join(roomId)
        socket.roomId = roomId;
    })

    socket.socket.on('leave_room', function(roomId) {
        socket.socket.leave(roomId)
        socket.roomId = "none";
    })

    socket.socket.on('wez', function () {

        //increase the click count for the player and the room,
        //if click destroys room, send destroy message to all sockets

        socket.socket.to(socket.roomId).emit("wez", {})
    })

    socket.socket.on('disconnect', function(){
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