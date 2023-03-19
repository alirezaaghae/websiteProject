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


//admoon js 

var itemSelected = '';
var register = false;

function ShowSelectItems() {

    //  hide another
    $("#formInputs").addClass("hidden").hasClass("show");
    $("#formInputs").removeClass("show");
    $("#registeredItems").addClass("hidden").hasClass("show");
    $("#registeredItems").removeClass("show");
    //  show
    $("#selectItems").addClass("show").not('.show');
    $("#selectItems").removeClass("hidden");

    $("div.state.inquiry").removeClass("checked").hasClass("checked");
    $("div.state.register").removeClass("checked").hasClass("checked");
    return true;
}

function showFormInputs() {
    //  hide another
    $("#selectItems").addClass("hidden").hasClass("show");
    $("#selectItems").removeClass("show");
    $("#registeredItems").addClass("hidden").hasClass("show");
    $("#registeredItems").removeClass("show");
    //  show
    $("#formInputs").addClass("show").not('.show');
    $("#formInputs").removeClass("hidden");

    $("div.state.register").removeClass("checked").hasClass("checked");
    $("div.state.inquiry").addClass("checked").not(".checked");
    return true;
}

function showRegisteredItems() {
    //  hide
    $("#selectItems").addClass("hidden").hasClass("show");
    $("#selectItems").removeClass("show");
    $("#formInputs").addClass("hidden").hasClass("show");
    $("#formInputs").removeClass("show");
    //  show
    $("#registeredItems").addClass("show").not('.show');
    $("#registeredItems").removeClass("hidden");

    $("div.state.inquiry").addClass("checked").not(".checked");
    $("div.state.register").addClass("checked").not(".checked");
    return true;
}

function sendAjaxForm() {
    $('form').submit(function () {
        return false;
    });
    var name, phone, website, costs, key_words, social;
    var returnerr = 'false';
    var elm = $(this).parent();
    var a = 'ld';
    name = $('#name').val();
    phone = $('#phone').val();
    website = $('#website').val();
    costs = $('#costs').val();
    key_words = $('#key_words').val();
    social = $('#social').val();

            // page = window.location.href;
            if (phone == '' || phone.length != 11) {
                $('#name').addClass('error');
                returnerr = 'true';
                setTimeout(function () {
                    $('.error').removeClass('error');
                }, 1000);
            }
            if (returnerr == 'true') {
                return false;
            }
    $('#next_button').addClass('pending');
    $('#next_button').prop('disabled', true);

    // disable all forms when fill the form :|
//     [beforAjax] $('#next_button').addClass('pending');
//     [ajaxSuccess:] $('#next_button').removeClass('pending');$('form').addClass('success');
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'item': itemSelected,
            'name': name,
            'phone': phone,
            'website': website,
            'costs': costs,
            'key_words': key_words,
            'social': social
        },
        success: function (result) {
            $('#next_button').addClass('disable');
            elm.addClass('success');
            // console.log(result);
            showRegisteredItems();
        }
    });

}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

