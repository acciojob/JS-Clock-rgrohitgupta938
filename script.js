//your code here
const hours = document.querySelector(".hour-hand");
const minutes = document.querySelector(".min-hand");
const seconds = document.querySelector(".second-hand");

const setClock = () => {
  const now = new Date();

  const sec = now.getSeconds();
  const secHand = (sec / 60) * 360 + 90; /// 90 for inital rotation in css
  seconds.style.transform = `rotate(${secHand}deg)`;
  
  const min = now.getMinutes();
  const minHand = (min / 60) * 360  + 90; /// 90 for initial rotation in css and *6 is for seconds in min hand
  minutes.style.transform = `rotate(${minHand}deg)`;

  const hour = now.getHours();
  const hourHand = ((hour / 12) * 360) + 90; ////90 for inital rotation and *12 in mintues for mintues in hours hand
  hours.style.transform = `rotate(${hourHand}deg)`;
};

setInterval(setClock, 1000);
setClock();
