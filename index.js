var video = document.querySelector("#videoElement");
var canvas = document.querySelector("#canvas");
var context = canvas.getContext('2d');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(function(err0r) {
      alert("Something went wrong!");
    });
}

function snap() {
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  context.drawImage(video, 0, 0);
}
