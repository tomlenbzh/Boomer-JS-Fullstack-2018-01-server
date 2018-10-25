import App from './App';
import db from './models';
import http from 'http'
import socket from 'socket.io'

// await db.migrations();

// console.log(db);

const app = new App();

const server = http.createServer(app.koaApp.callback())
const io = socket(server)

io.on('join_room', function (socket) {
    console.log('a user connected')
})

io.on('wez', function (socket) {
    console.log('click')
})


app.start();

server.listen(8000);


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