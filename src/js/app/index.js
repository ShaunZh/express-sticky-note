/*
* @Author: Marte
* @Date:   2017-09-17 01:33:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-30 11:49:35
*/

'use strict';

require('scss/index.scss');

var Event = require('mod/event.js').Event;
var NoteManager = require('mod/note_manager.js').NoteManager;
var Event = require('mod/event.js').Event;
var WaterFall = require('mod/waterfall.js');

NoteManager.load();

$('#header .add-note').on('click', function() {
  NoteManager.add();
})

Event.on('waterfall', function() {
  WaterFall.init($('#content'));
})