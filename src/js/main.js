var h = document.getElementsByTagName("nav")[0];
var video = document.getElementById("videobackground");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetHeight;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    stuck = true;
    video.style.marginTop = '100px';
    h.classList.add('flex-nav');
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
    video.style.marginTop = '0px';
    h.classList.remove('flex-nav');
  }
}