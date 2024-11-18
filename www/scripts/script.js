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

  });

  $('.js-tab-link').on('click', function(event) {
    event.preventDefault();

    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-tab').removeClass('active');
    $('.js-contacts-tab').eq(index).addClass('active');

  });

  $(document).ready(function() {
    $('.reviews_carousel').slick()
  });

  $('.js-catalog-more').on('click', function() {

    let btn = this;

    $(btn).attr('disabled', 'disabled')

    $.ajax({
      type: 'POST',
      url: '../jsons/catalog.json',
      data: {
        quantity: 4
      },

      success: function(res) {
        let catalogHtmlString = createCatalogHtml(res.catalog)
        console.log(catalogHtmlString);

        $('.js-catalog-list').append(catalogHtmlString);
        $(btn).removeAttr('disabled')
      },
      error: function() {
        console.log('error');
      }
    });
  });

  function createCatalogHtml(catalogArray) {
    let result = ''

    catalogArray.forEach(function(card) {
      result += `<div class="card_content js-card-type" data-type="strict">
            <img src="${card.imgSrc}" alt="" class="card_visual">
            <p class="${card.text}">Бабочка такая</p>
          </div>`
    })

    return result;
  }

});
