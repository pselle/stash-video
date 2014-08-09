// Click record a video button launches camera (native) (back button rerecords video)
// User records video
// What's the problem? multiple choice
// If "Other" 
// Show the "more information" text box
// Submit button?
// Submit form data
// Success
console.log('client side loaded');

var form = $('#sendfile');

form.on('submit', function () {
    console.log('submitted');
    var filedata = new FormData(),
        video = document.getElementById('capture').files[0];
    debugger;

    $.ajax({
        type: 'POST',
        url: 'https://api.stash.my/v0/messages/send/file',
        data: {
            filedata: filedata,
            recipientId: '7f46085a-ea38-4cc1-b477033861c20d76',
            sessionId: 'PvluMOqNN+Aht4MmplXvr1tmLLPWNNg3liBum9y5unpS3XAu+mjD2+iHehI/gXfjDTkU8r8f/ar73FOytxK6IDOVUPHEU9jI/KPu596fDiorIyMr8hihPACnSwXZvU7L'
        },
        success: function (data) {
            debugger;
            alert('ok');
            return false;
        },
        error: function(err) {
            console.log(err);
            debugger;
        }
    })
})