
// if ($('.menu-btn').length > 0) { // check if element exists
//     var last_scroll_top = 0;
//     $(window).on('scroll', function() {
//         scroll_top = $(this).scrollTop();
//         if(scroll_top < last_scroll_top) {
//             $('.menu-btn').removeClass('scrolled-down').addClass('scrolled-up');
//         }
//         else {
//             $('.menu-btn').removeClass('scrolled-up').addClass('scrolled-down');
//         }
//         last_scroll_top = scroll_top;
//     });
// }
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }
jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }

});
