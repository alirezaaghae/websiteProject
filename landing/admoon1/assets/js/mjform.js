$('form').submit(function () {
    return false;
});
$(document).on('click', '.mjsubmit', function () {
    var page, field1, field2, field3, field4;
    var returnerr = 'false';
    var elm = $(this).parent();
    var a = 'ld';
    field1 = elm.find('.mjfield1').val();
    field2 = elm.find('.mjfield2').val();
    field3 = elm.find('.mjfield3').val();
    field4 = elm.find('.mjfield4').val();
    page = window.location.href;
    if (field1 == '' || field1.length != 11) {
        $('.mjfield1').addClass('error');
        returnerr = 'true';
        setTimeout(function () {
            $('.error').removeClass('error');
        }, 1000);
    }
    if (returnerr == 'true') {
        return false;
    }
    elm.find('.mjsubmit').addClass('pending');
    elm.find('.mjsubmit').prop('disabled', true);
    // disable all forms when fill the form :|
    // [beforAjax] $('.mjsubmit').addClass('pending');
    // [ajaxSuccess:] $('.mjsubmit').removeClass('pending');$('form').addClass('success');
    $.ajax({
        url: '/assets/js/mjform.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'page': page,
            'field1': field1,
            'field2': field2,
            'field3': field3,
            'field4': field4
        },
        success: function (result) {
            elm.find('.mjsubmit').removeClass('pending');
            elm.addClass('success');
        }
    });
});
