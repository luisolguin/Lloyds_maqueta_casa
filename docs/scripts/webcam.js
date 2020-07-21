
function webcamOn(){
  navigator.mediaDevices.getUserMedia({audio:false, video:true}).then((stream)=>{
    let video=document.getElementById('webcam');
    video.srcObject=stream;
  }).catch((err)=>console.log(err))

}
