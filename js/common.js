$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");



  function showCoords(evt){
    let info_block = $('.map-info-block')[0];
    info_block.style.left = evt.clientX + 30 +'px'; 
    info_block.style.top = evt.clientY + 30 +'px';
    $('.map-info-block').addClass('active');
  }

  $('.map-item__cursor').on('mouseenter', function() {
    let index_elem = $('.map-item__cursor').index(this);
    let elements__arr = $('.map-item');
    let now_element = $(elements__arr)[index_elem];

    $(now_element).addClass('visible');
    $(this).on('mouseleave', function() {
      $(now_element).removeClass('visible');
    })
  })



  

  $('.map-item__cursor').on('mouseenter', function() {
    let title = $(this).data('title');
    $('.map-info-block__title').text(title);
    showCoords(event)
    $(this).on('mouseout', function(argument) {
      $('.map-info-block').removeClass('active');
    })
  })


  var outerContent = $('.map-overlay');
  var innerContent = $('.map-scrool');
  $('.map-overlay').scrollLeft((innerContent.width() - outerContent.width()) / 2 - 70); 
})