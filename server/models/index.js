var db = require('../db');
db.connect();
module.exports = {
  messages: {
    get: function (res) {
      db.query('SELECT * FROM messages', (err, results) => {
        results = JSON.stringify(results);
        res.end(results);
      });
    }, // a function which produces all the messages
    post: function (data) {

      const one = db.escape(data.username);
      const two = db.escape(data.message);
      const three = db.escape(data.roomname);

      db.query(`INSERT INTO messages (ID, username, message, roomname) VALUES (NULL, ${one}, ${two}, ${three});`, 
              (err, results) => {
                if (err) {
                  throw err;
                }
              });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (data) {
      
    },
    post: function (data) {
      db.query(`INSERT INTO messages (ID, username) VALUES (NULL, ${data.username});`, 
              (err, results) => {});
    }
  }
};

// db.end();