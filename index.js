let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let button = document.getElementById('button');
    button.innerHTML = snap();

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitgetUserMedia ||
  navigator.mozgetUserMedia || navigator.ogetUserMedia || navigator.msgetUserMedia

if (navigator.getUserMedia) {
  navigator.getUserMedia({
    video: true
  }, streamWebcam, throwError);
}
  
function streamWebcam(stream) {
  video.src = window.URL.createObjectURL(stream);
  video.play();
}

function throwError(e) {
  alert(e.name);
}

function snap() {
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  context.drawImage = (video, 0, 0);
}
