// Click record a video button launches camera (native) (back button rerecords video)
// User records video
// What's the problem? multiple choice
// If "Other" 
// Show the "more information" text box
// Submit button?
// Submit form data
// Success
console.log('client side loaded');

var form = $('#upload');

form.on('submit', function (e) {
    var formdata = new FormData();
    formdata.append('filedata', document.getElementById('capture').files[0]);
    formdata.append('recipientId', document.getElementById('recipientId').value);
    formdata.append('sessionId', document.getElementById('sessionId').value);
    $.ajax({
        type: 'POST',
        url: 'https://api.stash.my/v0/messages/send/file',
        contentType: false,
        processData: false,
        cache: false,
        data: formdata,
        success: function (data) {
            console.log(data);
            return false;
        },
        error: function(xhr, status, error) {
            console.log(status);
            return false;
        }
    });
    e.preventDefault();
});

$(".btn-success").click(function() {
    $('html, body').animate({
        scrollTop: $("#thanks").offset().top
    }, 2000);
});
