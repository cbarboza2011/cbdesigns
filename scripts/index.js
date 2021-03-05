$(document).ready(function() {

  // ENLARGE PHOTOS IN GALLERY
  $('.photo-column div').on('click', function() {
    var $img = $(this).find('img');
    var $imgUrl = $img.attr('src');
    enlargePhoto($imgUrl);
  });

  // ENLARGE PORTFOLIO GRAPHICS
  $('.grid-box.graphic').on('click', function() {
    let $imgUrl = $(this).css('background-image');
    let $position = $imgUrl.indexOf("images/graphics/");
    $imgUrl = $imgUrl.substring($position, $imgUrl.length - 2);
    enlargePhoto($imgUrl);
  });

  // OPEN NAV MENU ON MOBILE
  $('.navcontrol').on('click', function() {
    if ($('.nav-links').is(':visible')) {
      $('.nav-links').slideToggle();
      $('.toggle').text('☰');
    } else {
      $('.nav-links').slideToggle();
      $('.toggle').text('×');
    }
  });

  let x = window.matchMedia("(max-width: 800px)");
  checkIfMobile(x) // Call listener function at run time
  x.addListener(checkIfMobile) // Attach listener function on state changes

  // CHANGE THINGS ON MOBILE
  function checkIfMobile(x) {
    if (x.matches) { // if mobile
      $('.nav-links').hide(); // hide nav menu
      $('.hide-on-mobile').hide(); // hide anything with this class
    }
  }

  // BIG PHOTO FUNCTION
  function enlargePhoto($imgUrl) {
    $('.big-photo').fadeIn(400).css('display','flex');
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').fadeOut(400);
    });
  }

  // PORTFOLIO SECTION OPEN & CLOSE FUNCTION
  $('.arrow').on('click', function() {
    var $section = $(this).nextAll('div.grid:first');
    console.log($section)
    $section.slideToggle();
  });


});
