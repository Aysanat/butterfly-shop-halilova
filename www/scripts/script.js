$(document).ready(function() {
  let $menu = $('.js-menu');

  $('.js-burger').on('click', function() {
    $menu.slideToggle();
  });

  let prevAccordionBtn;
  let openClass = 'open';

  $('.js-accordion-btn').on('click', function() {
    if (this === prevAccordionBtn) {
      $(this).toggleClass(openClass)
      $(this).next().slideToggle();
      return;
    }

    $(prevAccordionBtn).removeClass(openClass);
    $(prevAccordionBtn).next().slideUp();

    $(this).addClass(openClass)
    $(this).next().slideDown();

    prevAccordionBtn = this;
  });

  $('.js-catalog-filter').on('click', function(event) {
    event.preventDefault();

    $('.js-catalog-filter').removeClass('active');
    $(this).addClass('active');

    let filter = $(this).data('filter');

    if (filter === 'all') {
      $('.js-card-type').show();

      return;
    }


    $('.js-card-type').each(function() {
      let type = $(this).data('type');

      if (filter === type) {
        $(this).show();

        return;
      }

      $(this).hide();
    })

  })

  $('js-tab-link').on('click', function(event) {
    event.preventDefault();

    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-tab').removeClass('active');
    $('.js-contacts-tab').eq(index).addClass('active');

  })

  $(document).ready(function() {
    $('.carousel').slick()
  })

});
