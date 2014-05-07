$(document).ready(
  function () {
    $('.display-datetime').humaneDates();
  }
);

// https://github.com/zachleat/Humane-Dates jQuery plugin.
function humaneDate(e,t){function u(e,t){var n=.1;if(e>=t&&e<=t*(1+n)){return t}return e}if(!e){return}var n={ago:"Ago",from:"",now:"Just Now",minute:"Minute",minutes:"Minutes",hour:"Hour",hours:"Hours",day:"Day",days:"Days",week:"Week",weeks:"Weeks",month:"Month",months:"Months",year:"Year",years:"Years"},r=[[60,n.now],[3600,n.minute,n.minutes,60],[86400,n.hour,n.hours,3600],[604800,n.day,n.days,86400],[2628e3,n.week,n.weeks,604800],[31536e3,n.month,n.months,2628e3],[Infinity,n.year,n.years,31536e3]],i=typeof e=="string",e=i?new Date((""+e).replace(/-/g,"/").replace(/[TZ]/g," ")):e,t=t||new Date,s=(t-e+(t.getTimezoneOffset()-(i?0:e.getTimezoneOffset()))*6e4)/1e3,o;if(s<0){s=Math.abs(s);o=n.from?" "+n.from:""}else{o=n.ago?" "+n.ago:""}for(var a=0,f=r[0];r[a];f=r[++a]){if(s<f[0]){if(a===0){return f[1]}var l=Math.ceil(u(s,f[3])/f[3]);return l+" "+(l!=1?f[2]:f[1])+(a>0?o:"")}}}if(typeof jQuery!="undefined"){jQuery.humaneDate=humaneDate;jQuery.fn.humaneDates=function(e){var t=jQuery.extend({lowercase:false},e);return this.each(function(){var e=jQuery(this),n=e.attr("datetime")||e.attr("title");n=humaneDate(n);if(n&&t["lowercase"]){n=n.toLowerCase()}if(n&&e.html()!=n){e.html(n)}})}}
