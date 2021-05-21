'use strict';

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augusе', 'September', 'October', 'November', 'December'];

var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  let now = new Date();  

  let day = String(now.getDate())
  let month = String(now.getMonth() + 1)
  let year = now.getFullYear();

  document.getElementById('time').innerHTML = now.toLocaleTimeString();
  document.getElementById('date').innerHTML = `${days[now.getDay()]}, ${day} ${months[month - 1]} ${year}`
}