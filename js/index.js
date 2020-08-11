$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('.mess-btn').click(function() {
        $('.mess-box').toggle();
  });

  $('.btn-close').click(function() {
        $('.mess-box').hide();
  });

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  });
});