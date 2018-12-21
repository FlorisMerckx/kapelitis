$(document).ready(function () {


  $("#menu").hide();

  $("#menuToggle").click(function () {
    $("#menu").toggleClass("hide-menu");
    $("#menu").show();

  });

  $(".movingclouds1").animate({
    top: "-=" + (parseInt($(".movingclouds1").css("top")) - 430) + "px"
  });

  $(".movingclouds2").animate({
    top: "-=" + (parseInt($(".movingclouds2").css("top")) - 60) + "px"
  });

  $(".movingclouds3").animate({
    right: "-=" + (parseInt($(".movingclouds3").css("right")) - 70) + "px"
  });


  $('.checkbox').click(function () {
    $(this).toggleClass('is-checked');
  });


});