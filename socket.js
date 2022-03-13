let io;

module.exports = {
  init: (httpServer) => {
    io = require('socket.io')(httpServer, {
      cors: {
        origins: ['http://localhost:3000'],
        handlePreflightRequest: (req, res) => {
          res.writeHead(200, {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
          });
          res.end();
        },
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized.');
    }
    return io;
  },
};
