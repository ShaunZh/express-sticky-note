/*
* @Author: Marte
* @Date:   2017-09-17 15:56:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-17 19:37:16
*/

'use strict';

var $ = require('../lib/jquery.min.js');

function toast(msg, time) {
  this.msg = msg;
  this.dismissTime = time || 1000;
  this.createToast();
  this.showToast();
}

toast.prototype = {
  createToast: function() {
    var tpl = '<div class="toast">' + this.msg + '</div>';
    this.$toast = $(tpl);
    $('body').append(this.$toast);
  },
  showToast: function() {
    var self = this;
    this.$toast.fadeIn(300, function() {
      setTimeout(function() {
        self.$toast.fadeOut(300, function() {
          self.$toast.remove();
        });
      }, self.dismissTime);
    });
  }
};

function Toast(msg, time) {
  return new toast(msg, time);
}

module.exports.Toast = Toast;
