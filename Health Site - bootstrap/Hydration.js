var glass=0;
function calLitres(){
     glass=document.getElementById("glasses").value;
    var litres=glass*0.24;
    document.getElementById("litdiv").style.display='block';
    document.getElementById("litres").innerHTML=litres + " litres";
    


}
function clearLitre(){
   document.getElementById("glasses").value="";
 
    document.getElementById("litdiv").style.display='none';
  }
 
function changeMode(){
  let modeToggle=document.getElementById('btnMode');
  if (modeToggle.innerHTML == "OFF") {
        modeToggle.innerHTML = "ON";
     } 
     else {
        modeToggle.innerHTML = "OFF"
     }
  document.body.classList.toggle("dark-mode");
  document.getElementById("changeText").classList.toggle("text-dark");
  document.getElementById("calLitre").classList.toggle("btn-dark")

  document.getElementById("clearLitre").classList.toggle("btn-dark");
 
  
  
  

}