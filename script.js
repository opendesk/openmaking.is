$(document).ready(
  function () {
    // Make dates human readable.
    $('.display-datetime').humaneDates({'lowercase': true});
    // Auto-resize videos to fit responsive column width.
    $('.main-content').fitVids();
    // Handle the category navigation.
    $('[data-target="articles"]').each(
      function () {
        var $container = $(this);
        var $links = $($container.data('link-selector'));
        var $items = $container.find('.listing-item');
        var set_active_state = function (token) {
          $links.each(
            function () {
              var $item = $(this);
              var $parent = $item.parent('li');
              var target = $item.attr('href').split('#').slice(-1)[0];
              if (token && token == target) {
                $parent.addClass('active');
              }
              else {
                $parent.removeClass('active');
              }
            }
          );
        } 
        var filter_by_topic = function (topic) {
          $items.each(
            function () {
              var $item = $(this);
              if (!topic || $item.hasClass(topic)) {
                $item.show();
              }
              else {
                $item.hide();
              }
            }
          );
        };
        var handle_hash = function (only_if_topic_exists) {
          var topic = '';
          if (location.hash) {
            topic = location.hash.slice(1);
          }
          if (topic || !only_if_topic_exists) {
            filter_by_topic(topic);
          }
          set_active_state(topic);
        };
        $(window).on('hashchange', handle_hash);
        handle_hash(true);
      }
    );
  }
);

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

/*
 * Javascript Humane Dates
 * Copyright (c) 2008 Dean Landolt (deanlandolt.com)
 * Re-write by Zach Leatherman (zachleat.com)
 * Refactor by Chris Pearce (github.com/Chrisui)
 *
 * Adopted from the John Resig's pretty.js
 * at http://ejohn.org/blog/javascript-pretty-date
 * and henrah's proposed modification
 * at http://ejohn.org/blog/javascript-pretty-date/#comment-297458
 *
 * Licensed under the MIT license.
 */

;(function(root){

  var lang = {
      ago: 'Ago',
      from: 'Ago',
      now: 'Just Now',
      minute: 'Minute',
      minutes: 'Minutes',
      hour: 'Hour',
      hours: 'Hours',
      day: 'Day',
      days: 'Days',
      week: 'Week',
      weeks: 'Weeks',
      month: 'Month',
      months: 'Months',
      year: 'Year',
      years: 'Years'
    },
    formats = [
      [60, lang.now],
      [3600, lang.minute, lang.minutes, 60], // 60 minutes, 1 minute
      [86400, lang.hour, lang.hours, 3600], // 24 hours, 1 hour
      [604800, lang.day, lang.days, 86400], // 7 days, 1 day
      [2628000, lang.week, lang.weeks, 604800], // ~1 month, 1 week
      [31536000, lang.month, lang.months, 2628000], // 1 year, ~1 month
      [Infinity, lang.year, lang.years, 31536000] // Infinity, 1 year
    ];

  function normalize(val, single)
  {
    var margin = 0.1;
    if(val >= single && val <= single * (1+margin)) {
      return single;
    }
    return val;
  }

  root.humaneDate = function(date, compareTo){

    if(!date) {
      return;
    }

    var isString = typeof date == 'string',
      date = isString ?
            new Date(('' + date).replace(/-/g,"/").replace(/T|(?:\.\d+)?Z/g," ")) :
            date,
      compareTo = compareTo || new Date,
      seconds = (compareTo - date +
              (compareTo.getTimezoneOffset() -
                // if we received a GMT time from a string, doesn't include time zone bias
                // if we got a date object, the time zone is built in, we need to remove it.
                (isString ? 0 : date.getTimezoneOffset())
              ) * 60000
            ) / 1000,
      token;

    if(seconds < 0) {
      seconds = Math.abs(seconds);
      token = lang.from ? ' ' + lang.from : '';
    } else {
      token = lang.ago ? ' ' + lang.ago : '';
    }

    /*
     * 0 seconds && < 60 seconds        Now
     * 60 seconds                       1 Minute
     * > 60 seconds && < 60 minutes     X Minutes
     * 60 minutes                       1 Hour
     * > 60 minutes && < 24 hours       X Hours
     * 24 hours                         1 Day
     * > 24 hours && < 7 days           X Days
     * 7 days                           1 Week
     * > 7 days && < ~ 1 Month          X Weeks
     * ~ 1 Month                        1 Month
     * > ~ 1 Month && < 1 Year          X Months
     * 1 Year                           1 Year
     * > 1 Year                         X Years
     *
     * Single units are +10%. 1 Year shows first at 1 Year + 10%
     */

    for(var i = 0, format = formats[0]; formats[i]; format = formats[++i]) {
      if(seconds < format[0]) {
        if(i === 0) {
          // Now
          return format[1];
        }

        var val = Math.ceil(normalize(seconds, format[3]) / (format[3]));
        return val +
            ' ' +
            (val != 1 ? format[2] : format[1]) +
            (i > 0 ? token : ' ');
      }
    }
  };

  if(typeof jQuery != 'undefined') {
    jQuery.fn.humaneDates = function(options)
    {
      var settings = jQuery.extend({
        'lowercase': false
      }, options);

      return this.each(function()
      {
        var $t = jQuery(this),
          date = $t.attr('datetime') || $t.attr('title');

        date = humaneDate(date);

        if(date && settings['lowercase']) {
          date = date.toLowerCase();
        }

        if(date && $t.html() != date) {
          // don't modify the dom if we don't have to
          $t.html(date);
        }
      });
    };
  }
})(this);

/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null,
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );