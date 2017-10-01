/*
* @Author: Marte
* @Date:   2017-09-30 14:20:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-01 09:21:47
*/

'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
// 引入模型，也就是数据
var Note = require('../model/note').Note;

// 获取所有 note
router.get('/notes', function(req, res, next) {
  Note.findAll({raw: true}).then(function(notes) {
    res.send({status: 0, data: notes})
    console.log(notes);
  })

})

// 创建一个 note
router.post('/notes/add', function(req, res, next) {
  var note = req.body.note;
  Note.create({text: note}).then(function() {
    res.send({status: 0});
  }).catch(function(err) {
    res.send({status: 1, errorMsg: "创建错误"})
  })
})

// 修改一个 note
router.post('/notes/edit', function(req, res, next) {
  Note.update({text: req.body.note}, {where: {id: req.body.id}}).then(function() {
     res.send({status: 0})
  })
})

// 删除一个 note
router.post('/notes/delete', function(req,res, next) {
  Note.destroy({where: {id: req.body.id}}).then(function() {
    res.send({status: 0});
  })
})

module.exports = router;


