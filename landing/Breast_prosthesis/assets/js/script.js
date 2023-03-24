// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator input"),
    i;
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
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
    setInputFilter(alireza[i], function (value) {
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


//$(document).ready(function(){
//  $('.owl-carousel-index').owlCarousel({
//      rtl:true,
//      loop:true,
//      dots: false,
//      autoplay: true,
//      autoplayTimeout: 5000,
//      nav: true,
//      margin: 80,
//      navText : ["<div class='owl-next'><img src='assets/images/sample/right-arrow.svg' width='54px'></div>","<div class='owl-prev'><img src='assets/images/sample/left-arrow.svg' width='54px'></div>"],
//      responsive:{
//        0:{
//            items:2,
//            nav:false,
//            margin: 80
//        },
//        600:{
//            items:3,
//            margin: 30
//        },
//        1000:{
//            items:4,
//        }
//       }
//  });
//});

// Custome Select
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected first");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// firstSlider


  $('.owl-carousel.first').owlCarousel({
      rtl:true,
      loop:true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      nav: true,
      margin: 80,
      navText : ["<img src='assets/images/right_button.svg' width='54px'>","<img src='assets/images/left_button.svg' width='54px'>"],
      responsive:{
        0:{
            items:1,
            nav:false,
            margin: 80
        },
        600:{
            items:2,
            margin: 30
        },
        1000:{
            items:3,
        }
       }
  });

$('.owl-carousel.second').owlCarousel({
      rtl:true,
      loop:true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      nav: true,
      margin: 80,
      navText : ["<img src='assets/images/right_button_cm.svg' width='35px'>","<img src='assets/images/left_button_cm.svg' width='35px'>"],
      responsive:{
        0:{
            items:1,
            nav:false,
            margin: 80
        },
        600:{
            items:2,
            margin: 30
        },
        1000:{
            items:3,
        }
       }
  });