const face = document.getElementsByClassName("face");
const eyeLeft = document.getElementsByClassName("eye-left");
const eyeRight = document.getElementsByClassName("eye-right");
const whiskers = document.getElementById("whiskers");
const whiskerTop = document.getElementById("whisker-top");
const whiskerMiddle = document.getElementById("whisker-middle");
const whiskerBottom = document.getElementById("whisker-bottom");

console.log(whiskers);
// face.addEventListener("mousemove", moveEyes);
whiskers.addEventListener("mouseenter",moveWhiskers);

// function moveEyes(){
//   eyeLeft.style.
// }
async function moveWhiskers(){
  await movingWhiskers();
  await cleanWhiskersAnimation();  
}

function movingWhiskers(){
  console.log("async 1");
  whiskerTop.classList.add("move-whiskers");
    whiskerMiddle.classList.add("move-whiskers");
    whiskerBottom.classList.add("move-whiskers");
}

function cleanWhiskersAnimation(){
  console.log("async 2");
    whiskerTop.classList.remove("move-whiskers");
    whiskerMiddle.classList.remove("move-whiskers");
    whiskerBottom.classList.remove("move-whiskers");
}