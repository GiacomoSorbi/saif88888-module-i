/* global $ ,alert, console */

$(function() {
  "use strict";
  //adjust header height

  var myHeader = $(".header");
  myHeader.height($(window).height());
  $(window).resize(function() {
    myHeader.height($(window).height());
  });

  //links add active class

  $(".links li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // adjust bxslider list item center

  //$(".bxslider").each(function() {
  // $(this).css(
  //  "paddingTop",
  // ($(window).height() - $(".bxslider").height()) / 2
  // );
  //});
  // Trigger the bx slider
  $(".bxslider").bxSlider({
    pager: false
  });
});
