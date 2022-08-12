/** @format */

const hr = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("seconds");
const tz = document.getElementById("timezone");

const clock = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let timeFormat = "AM";
  if (hour > 12) {
    hour = hour - 12;
    timeFormat = " PM";
  }
  hr.textContent = `${hour}`;
  min.textContent = `${minute}`;
  sec.textContent = `${seconds}`;
  tz.textContent = `${timeFormat}`;
  hour < 10 ? (hr.textContent = `0${hour}`) : null;
  seconds < 10 ? (sec.textContent = `0${seconds}`) : null;
  minute < 10 ? (min.textContent = `0${minute}`) : null;
};
setInterval(clock, 1000);
