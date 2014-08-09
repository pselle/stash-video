window.onload = function() {
 
    var messages = [];
    var video = [];
    var socket = io.connect('http://localhost:' + process.env.PORT || 3000);
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
 
    socket.on('message', function (data) {
        
    });
 
    socket.on('video', function(data) {
        
    });
    
    sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };
 
}