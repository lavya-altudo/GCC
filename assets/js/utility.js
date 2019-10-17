
$(function () {
  $("#fontSizeScroller").slider();
  $(".select-trip-month-title").click(function () {
    $(this).closest(".select-trip-month-row").toggleClass("open").siblings().removeClass('open');
  })
  $(".select-trip-date-title").click(function () {
    $(this).closest(".select-trip-date-row").toggleClass("open").siblings().removeClass('open');
  })

  $(".dateprice-dropdown select").selectmenu();
});