/*
$(document).ready(function () {
  $('body').scrollspy({
      target: '#navfix',
      offset: 100
  });
  var interval;
  $(window).on('resize', function () {
      clearTimeout(interval);
      interval = setTimeout(
        function () {
          $('body').scrollspy('refresh');
        }, 
        300
      );
  });
  $('#navfix').affix({
      offset: {
        top: function () {
          return $('#home').height() + $('#intro').height() + $('#navfix').height() + 6;
        }
      }
  });
});
*/