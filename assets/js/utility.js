
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
  $(".js-select-trip-date-row .btn").click(function (e) {
    e.stopPropagation();
  })
  //Initialising custom Jquery select menu for dateprice Dropdown
  $(".dateprice-dropdown select").selectmenu();

  //trip filter btn functionality 
  $(".js-trip-filter__btn").click(function () {
    var $this = $(this);
    var $thisFilterContainer = $this.closest(".trip-filter");
    $thisFilterContainer.toggleClass("open").siblings().removeClass('open');
  });

  $(".js-trip-filter__box-btn").click(function () {
    var $this = $(this);
    var $thisFilterContainer = $this.closest(".trip-filter");
    var $thisMainFilter = $this.closest(".trip-filter").find(".js-trip-filter__btn");
    if (!$this.hasClass("active") || $thisFilterContainer.hasClass("trip-filter__default")) {
      $this.addClass("active").siblings().removeClass('active');
      $thisMainFilter.text($this.text());
      $thisFilterContainer.addClass("active");
    } else {
      $this.removeClass("active");
      $thisMainFilter.text($thisMainFilter.attr("data-filter-val"));
      $thisFilterContainer.removeClass("active");
    }
  })

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".trip-filter").length === 0) {
      $(".trip-filter").removeClass("open");
    }
  })


  if ($('.trip-filter__group').length > 0) {
    function parentActivator(__this) {
      let $thisFilterContainer = __this.closest(".trip-filter");
      let $thisMainFilter = __this.closest(".trip-filter").find(".js-trip-filter__btn");
      let checkedboxCount = Array.prototype.slice.call($('.trip-filter__group').find('input[type=checkbox]'), 0).filter(function (d) { return d.checked }).length;
      if (checkedboxCount > 0) {
        $thisFilterContainer.addClass('active');
        $thisMainFilter.text($thisMainFilter.attr("data-filter-val")+" ("+ checkedboxCount+")");
      } else {
        $thisFilterContainer.removeClass('active');
        $thisMainFilter.text($thisMainFilter.attr("data-filter-val"));

      }
    }
    function clearCheckbox(__this) {
      if (__this != null) {
        __this.parents('.trip-filter__group').find('input[type=checkbox]').prop("checked", false);
        __this.parents('.trip-filter__group').find('.trip-filter__row').removeClass('active');

      } else {
        $('.trip-filter__group').find('input[type=checkbox]').prop("checked", false);
        $('.js-trip-filter__select-all-btn').removeClass('active');
        $('.trip-filter__row').removeClass('active');
      }
    }

    function selectAllButtonValidator(__this) {
      var i = Array.prototype.slice.call(__this.parents('.trip-filter__group').find('input[type=checkbox]'), 0);
      return i.filter(function (t) { return t.checked == true }).length == i.length ? true : false;
    }

    $('.js-trip-filter__select-all-btn').on('click', function () {
      if ($(this).hasClass('active') == true) {
        $(this).removeClass('active');
        clearCheckbox($(this));
      } else {
        $(this).parents('.trip-filter__group').find('input[type=checkbox]').prop("checked", true);
        $(this).addClass('active');
        $(this).parents('.trip-filter__group').find('.trip-filter__row').addClass('active');
      }
      parentActivator($(this));
    });

    $('.trip-filter__group').find('input[type=checkbox]').on('click', function () {
      $(this).prop('checked') == true ? $(this).parents('.trip-filter__row').addClass('active') : $(this).parents('.trip-filter__row').removeClass('active');
      var button = $(this).parents('.trip-filter__group').find('.js-trip-filter__select-all-btn');
      selectAllButtonValidator($(this)) ? button.addClass('active') : button.removeClass('active');
      parentActivator($(this));
    })

    $('.js-trip-filter__clear-btn').on('click', function () {
      clearCheckbox(null);
      parentActivator($(this));
    })
  }
  
  $('.js-payby-select__toggle').on('click', function () {
    $(this).closest(".summary-nav__row").find(".payby-select").toggleClass("open");
  })
});