// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
const constraints = {
  video: {width:400 , height:600}
};

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    video.srcObject = stream;
    video.play();
    
  })
  .catch((error) => {
    if (error.name === 'ConstraintNotSatisfiedError') {
        document.getElementById("error").innerHTML = "The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.";
    } else if (error.name === 'PermissionDeniedError') {
        document.getElementById("error").innerHTML = "permission denied"; 
      
    } else {
        document.getElementById("error").innerHTML = "else"; 
      console.error(`getUserMedia error: ${error.name}`, error);
    }
  });