/*
* @Author: Marte
* @Date:   2017-09-28 21:03:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-01 09:02:56
*/

'use strict';

 var WaterFall = (function() {
  var $ct;
  var $items;

  function render($ct) {
    $ct = $ct;
    $items = $ct.find('> .note');
    var itemWidth = $items.outerWidth(true),
        colNum = parseInt($(window).width() / itemWidth),
        colSumHeightArr = [];

    for (var i = 0; i < colNum; i++) {
      colSumHeightArr.push(0);
    }
    $.each($items, function(index, val) {
       /* iterate through array or object */
       var $cur = $(this),
          idx = 0,
          minColHeight = colSumHeightArr[0];

      for (var i = 0, len = colSumHeightArr.length; i < len; i++) {
        if (colSumHeightArr[i] < minColHeight) {
          idx = i;
          minColHeight = colSumHeightArr[i];
        }
      }

      $cur.css({
        left: itemWidth * idx,
        top: minColHeight
      });

      colSumHeightArr[idx] = $cur.outerHeight(true) + colSumHeightArr[idx];
    });
  }

  $(window).on('resize', function() {
    render($ct);
  })

  return {
    init: render
  }

 })();


module.exports = WaterFall;