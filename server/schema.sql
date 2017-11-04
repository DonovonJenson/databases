-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId int AUTO_INCREMENT NOT NULL,
  username CHAR(120),
  message CHAR(120),
  roomname CHAR(120),
  PRIMARY KEY(objectId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

