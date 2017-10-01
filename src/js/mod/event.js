/*
* @Author: Marte
* @Date:   2017-09-28 17:14:40
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-30 10:34:23
*/

var Event = (function() {
  var topics = {};
  var hOP = topics.hasOwnProperty;
  return {
    on: function(event, listenr) {
      if (!hOP.call(topics, event)) {
        topics[event] = [];
      }
      var index = topics[event].push(listenr) - 1;
      return {
        remove: function() {
          delete topics[event][index];
        }
      }
    },
    fire: function(event, info) {
      if (!hOP.call(topics, event)) {
        return ;
      }
      topics[event].forEach(function(item) {
        item(info !== undefined ? info : {});
      })
    }
  }
})();

module.exports.Event = Event;