var timeleft;
var downloadTimer 
function timer(){
   timeleft = 10;
   downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").style.padding="30%";
        document.getElementById("countdown").innerHTML = "The End ";
       
      } else {document.getElementById("countdown").style.padding="0%";
          document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      }
      timeleft -= 1;
  }, 1000);
}
function stopTimer(){
  timeleft=10
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
}
let count = 0;
//let btn = document.getElementById("HeartCount");

function heartBeatCount() {
  count++;

  document.getElementById("display").innerHTML = count;
}
function clearCount(elemId){
  document.getElementById(elemId).innerHTML = 0;
}
function calculatePulse(){
  var pulse=0;
  pulse=count*6;
  document.getElementById("Pulse").innerHTML=pulse + " Beats per minute";
}
function changeMode(){
  let modeToggle=document.getElementById('btnMode');
  if (modeToggle.innerHTML == "OFF") {
        modeToggle.innerHTML = "ON";
     } 
     else {
        modeToggle.innerHTML = "OFF"
     }
  document.body.classList.toggle("dark-mode")
 
  document.getElementById("timer").classList.toggle("btn-dark");
  document.getElementById("timerStop").classList.toggle("btn-dark");
  document.getElementById("HeartCount").classList.toggle("btn-dark");
  document.getElementById("ClearCount").classList.toggle("btn-dark");
  document.getElementById("HeartCount1").classList.toggle("btn-dark")
  document.getElementById("ClearCount1").classList.toggle("btn-dark")
  document.getElementById("changeText").classList.toggle("text-dark");
  document.getElementById("countdown").classList.toggle("text-dark");
  document.getElementById("display").classList.toggle("text-dark");
  document.getElementById("pTag").classList.toggle("text-dark");
  
  

}