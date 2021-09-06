const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const video = document.querySelector(".vidsound video");
//Sounds
const sounds = document.querySelectorAll(".sound_selection button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
//Duration
const timeSelect = document.querySelectorAll(".timer button");
let fakeDuration = 60;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
  });

const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./images/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./images/playit.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./images/playit.svg";
    video.pause();
  }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
