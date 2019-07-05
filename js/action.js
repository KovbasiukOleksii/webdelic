let currentTime = new Date(Date.now());
let goalTime = new Date(document.querySelector('#counter-1').getAttribute("datetime"));
let countdownTime = goalTime.getTime() - currentTime.getTime();
const countdown = document.querySelector('.countdown');
const countdownDays = countdown.querySelector('.days');
const countdownHours = countdown.querySelector('.hours');
const countdownMinutes = countdown.querySelector('.minutes');
const countdownSeconds = countdown.querySelector('.seconds');

function formatTimeString(timeNumber){
  let tempArray =  timeNumber.toString().split('');
  
  if(tempArray.length < 2) {
    tempArray.unshift("0");
  }
  
  return tempArray.map((item)=>{
    return `<span>${item}</span>`;
  }).join('');
}

function tick(){
  countdownTime-=1000;
  let newDay = formatTimeString(Math.floor(countdownTime / 86400000));
  let newHour = formatTimeString(Math.floor((countdownTime % 86400000)/ 3600000));
  let newMinute = formatTimeString(Math.floor(((countdownTime % 86400000) % 3600000) / 60000));
  let newSecond = formatTimeString(Math.floor((((countdownTime % 86400000) % 3600000) % 60000) / 1000) );
  
  requestAnimationFrame(()=>{
    countdownDays.innerHTML = newDay;
    countdownHours.innerHTML = newHour;
    countdownMinutes.innerHTML = newMinute;
    countdownSeconds.innerHTML = newSecond;
  });
};

setInterval(tick,1000);