// Countdown to 25 Dec 2023 10:00
const target = new Date("2023-12-25T10:00:00").getTime();
const countdown = () => {
  const now = new Date().getTime();
  const distance = target - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
};

setInterval(countdown, 1000);
