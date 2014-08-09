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
    $.ajax({
        type: 'POST',
        url: 'https://api.stash.my/v0/messages/send/file',
        contentType: false,
        processData: false,
        cache: false,
        data: new FormData(this),
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