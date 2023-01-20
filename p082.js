import * as tf from "./@tensorflow/tfjs";
// const tf = require("@tensorflow/tfjs");
async function webcamLaunch() {
  const display = document.getElementById("display");
  const videoElement = document.createElement("video");

  //웹캔 이미지를 표시하기 위한 요소를 추가
  display.appendChild(videoElement);
  videoElement.width = 500;
  videoElement.height = 500;
  const webcamIterator = await tf.data.webcam(videoElement);

  //img : 입력 웹캠 아미지를 나타내는 텐서
  let img = await webcamIterator.capture();
  img.print();
}
webcamLaunch();
