$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator input"),i;
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}
for (i = 0; i < alireza.length; ++i) {
  alireza[i].maxLength = 11;
  // Restrict input to digits and '.' by using a regular expression filter.
  setInputFilter(alireza[i], function(value) {
  return /^[0-9۰-۹]*$/i.test(value);
});
}



// $(document).ready(function(){
//     $(".close-bg ,.close-button").on('click', function() {
//         $(".index-page").removeClass('blur');        
//         $(".pop-up").fadeOut("500");
//         $('html').css('overflow','inherit');
//     });
// });


$(document).ready(function(){
  $('.owl-carousel-index').owlCarousel({
      rtl:true,
      loop:true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      margin: 80,
      navText : ["<div class='owl-next'><img src='assets/images/sample/right-arrow.svg' width='54px'></div>","<div class='owl-prev'><img src='assets/images/sample/left-arrow.svg' width='54px'></div>"],
      responsive:{
        0:{
            items:2,
            nav:false,
            margin: 80
        },
        600:{
            items:3,
            margin: 30
        },
        1000:{
            items:4,
        }
       }
  });
});