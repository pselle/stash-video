function success(position) {
  
  
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(position.coords.accuracy);

  $( ".btn-location" ).text( position.coords.latitude + ", " + position.coords.longitude );
}

function error(msg) {
  var s = $('.location');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}

if (navigator.geolocation) {
  
} else {
  error('not supported');
}

// SMooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
