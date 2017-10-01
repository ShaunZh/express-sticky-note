/*
* @Author: Marte
* @Date:   2017-09-30 15:04:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-01 08:57:51
*/

'use strict';
var Sequelize = require('sequelize');
var path = require('path');
var sequelize = new Sequelize(undefined,undefined,undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/database.sqlite')
});


var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
});

// Note.sync().then(function() {
//   Note.create({text: 'hello world'});
// }).then(function() {
//   Note.findAll({raw: true}).then(function(notes) {
//     console.log(notes);
//   })
// })

 /*
测试数据库
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/

module.exports.Note = Note;