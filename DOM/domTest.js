let newDiv = document.getElementsByClassName('dom')
console.log(newDiv);

const getId = document.getElementById('newDom')

const getTumLum = document.querySelector('#dom');

const time = document.querySelector('.time');
const clock = document.querySelector('.clock');

const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  clock.classList.toggle("active")
})


setInterval(() => {
  const date = new Date();
  const hours = date.getHours(); // 21
  const minutes = date.getMinutes(); // 9
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  const seconds = date.getSeconds(); // 20
  time.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000)