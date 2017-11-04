var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
});
User.sync();

var Message = db.define('Message', {
  // objectId: Sequelize.INTEGER,
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});
Message.sync();



module.exports = {
  messages: {
    get: function (res) {
      Message.findAll({})
              .then((results) => {
                let obj = {};
                obj.results = results;
                res.end(JSON.stringify(obj));
              });
    },
    post: function (data) {
     // console.log('SOMETHING IMPORTANT:', data);
      Message.create({
        username: data.username, 
        message: data.message, 
        roomname: data.roomname
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (data) {
      
    },
    post: function (data) {
      User.create({username: data.username});
    }
  }
};

// db.end();