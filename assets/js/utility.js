
$(function () {
  $("#fontSizeScroller").slider({
    step: 3,
    value: 14,
    min: 5,
    max: 23,
    change: function (event, ui) {
      $("body").css("font-size", ui.value + "px")
    }
  });
});