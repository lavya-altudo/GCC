
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
  
  //trip filter btn functionality 
  $(".js-trip-filter__btn").click(function () {
    var $this = $(this);
    var $tripFilterBox = $this.next(".trip-filter__box");
    if ($tripFilterBox.is(":hidden")) {
      $(".trip-filter__box").hide();
      $tripFilterBox.show();
      $this.addClass("dark");
    }
    else {
      $tripFilterBox.hide();
      $this.removeClass("dark");
    }
  });
  $(".js-trip-filter__box-btn").click(function () {
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
      $this.siblings().removeClass("active");
    }
    else {
      $this.removeClass("active");
    }
  })


  // $(document).mouseup(function (e) {
  //   var container = $(".js-trip-filter__box");
  //   var containerToggleBtn = $(".js-trip-filter__btn");
  //   // If the target of the click isn't the container
  //   if (!container.is(e.target) && container.has(e.target).length === 0 ) {
  //     if (!containerToggleBtn.is(e.target)) { container.hide(); }
  //   }
  // });
});