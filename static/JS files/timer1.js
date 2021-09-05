
  var counter = 0;

  let fakeDuration = 0;

  const timeDisplay = document.querySelector(".time-display");
  
  const timeSelect = document.querySelectorAll(".time-select button");
  



var button = document.getElementById("my-button");
var title = document.getElementById("title");

var countDown = -1 ;

button.addEventListener("click", function(event){
  if (countDown == -1) {
    button.innerHTML="Pause";


   
    countDown = setInterval(() => {
    fakeDuration++;
displayTime(fakeDuration);

    }, 1000);
  }

  
  else{
    button.innerHTML ="Start";
    clearInterval(countDown);
    countDown = -1;

  }
})

function endCount() {

clearInterval(countDown);
fakeDuration = 0;
timeDisplay.innerHTML = "00:00";

} 
function Start(){

const countDown = setInterval(() => {
    fakeDuration--;
displayTime(fakeDuration);
if (fakeDuration == 0 || fakeDuration < 1) {
endCount();
clearInterval(countDown);
}


}
, 1000);
}



  timeSelect.forEach(option => {
option.addEventListener("click", function() {
  fakeDuration = this.getAttribute("data-time");
  timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
    fakeDuration % 60
  )}`;
 
});
});

function displayTime(second) {

const min = Math.floor(second / 60);
const sec = Math.floor(second % 60);
timeDisplay.innerHTML = `
${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
`;

}



