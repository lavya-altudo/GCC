
$(function () {
  $("#fontSizeScroller").slider();
  //Toggle Month row and collapsing sibling Month rows and there child Date rows
  $(".js-view-dates-btn").click(function () {
    $(this).closest(".select-trip-month-row").toggleClass("open").siblings().removeClass('open').children().removeClass('open');
  })
  //Toggle Date row on click anywhere in a row
  $(".js-select-trip-date-row>.row").click(function () {
    $(this).closest(".select-trip-date-row").toggleClass("open");
  })
  //Prevent Toggle Date row on btn click inside date row
  $(".js-select-trip-date-row .btn").click(function(e){
    e.stopPropagation();
  })
  //Initialising custom Jquery select menu for dateprice Dropdown
  $(".dateprice-dropdown select").selectmenu();
});