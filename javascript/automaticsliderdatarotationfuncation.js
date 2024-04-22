$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, // Adjust the timeout value as needed (in milliseconds)
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1 // Display one item on small screens
        },
        576: {
          items: 2 // Display two items on medium screens
        },
        951: {
          items: 3 // Display three items on large screens and above
        }
      }
    });
  });
  