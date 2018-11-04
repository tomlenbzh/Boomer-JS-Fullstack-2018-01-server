'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default();

var IO = require('koa-socket');

var io = new IO();

//io.set('origins', 'https://alexandremartins.net')

io.attach(app.koaApp, { 'origins': '*:*', 'transport': ['websocket'] });
var models = _models2.default.initModels();

io.on('connection', function (ctx) {
  ctx.socket.on('joinRoom', function (params) {
    if (ctx.roomId != params.roomId) {
      ctx.socket.join(params.roomId);
    }
    ctx.roomId = params.roomId;
    ctx.userId = params.userId;
    ctx.userPseudo = params.userPseudo;

    io.socket.to(ctx.roomId).emit("players", ctx.socket.adapter.rooms[params.roomId].length);
  });

  ctx.socket.on('leaveRoom', function (params) {
    io.socket.to(params.roomId).emit("players", ctx.socket.adapter.rooms[params.roomId].length - 1);
    ctx.socket.leave(params.roomId);
    ctx.roomId = "none";
  });

  ctx.socket.on('playerClick', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var score, _score;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.rooms.increaseCount({ models: models, id: ctx.roomId });

          case 2:
            _context.t0 = _context.sent;

            if (!(_context.t0 === 'destroy')) {
              _context.next = 11;
              break;
            }

            _context.next = 6;
            return models.users.defeat({ userId: ctx.userId });

          case 6:
            score = _context.sent;

            ctx.socket.emit("score", score);
            io.socket.to(ctx.roomId).emit("destroy", {});
            _context.next = 15;
            break;

          case 11:
            _context.next = 13;
            return models.users.gainScore({ models: models, roomId: ctx.roomId, userId: ctx.userId });

          case 13:
            _score = _context.sent;

            ctx.socket.emit("score", _score);

          case 15:
            ;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  ctx.socket.on('disconnect', function () {});
});

app.start();