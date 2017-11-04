var models = require('../models');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};


module.exports = {
  messages: {
    options: function(req, res) {
      res.writeHead(200, headers);
      res.end();
    },
    get: function (req, res) {
      res.writeHead(200, headers);
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201, headers);
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    options: function(req, res) {
      res.writeHead(200, headers);
      res.end();
    },
    get: function (req, res) {
      res.writeHead(200, headers);
      res.end();
    },
    post: function (req, res) {
      res.writeHead(201, headers);
      models.users.post(req.body);
      res.end();
    }
  }
};

