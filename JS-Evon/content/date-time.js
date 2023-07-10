// 1. Date
{
  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getDay());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.toISOString());

  const newDate = new Date("Mon, 10 Apr 2023 14:23:18 GMT");
  console.log(newDate.getMonth() + 1);
  console.log(newDate.toDateString());
  console.log(newDate.toTimeString());
  console.log(newDate.toISOString());
  console.log(newDate.toLocaleDateString("vi-VI"));

  const days = newDate.getDate();
  console.log("days:", days);
  const month = newDate.getMonth() + 1;
  console.log("month:", month);
  const year = newDate.getFullYear();
  console.log("year:", year);
  const result = `${days}-${month < 10 ? `0${month}` : month}-${year}`;
  console.log("result:", result);

  console.log(newDate.toUTCString());
}
// 2. countdown
{
  // get current date
  const endDate = "Thu Apr 13 2023 20:30:00 GMT+0700 (Indochina Time)";
  const daysText = document.querySelector(".days .number");
  const hoursText = document.querySelector(".hours .number");
  const minutesText = document.querySelector(".minutes .number");
  const secondsText = document.querySelector(".seconds .number");
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const ONE_HOUR = 60 * 60 * 1000;
  const ONE_MINUTE = 60 * 1000;
  let timer;
  function countdown(endDate) {
    if (new Date(endDate) <= new Date()) {
      clearInterval(timer);
      return;
    }
    timer = setInterval(() => {
      const now = new Date();
      let remainsTime = new Date(endDate) - now;
      const remainDays = Math.floor(remainsTime / ONE_DAY);
      daysText.textContent = remainDays;
      remainsTime = remainsTime - remainDays * ONE_DAY;
      const remainHours = Math.floor(remainsTime / ONE_HOUR);
      hoursText.textContent = remainHours;
      remainsTime = remainsTime - remainHours * ONE_HOUR;
      const remainMinutes = Math.floor(remainsTime / ONE_MINUTE);
      minutesText.textContent = remainMinutes;
      remainsTime = remainsTime - remainMinutes * ONE_MINUTE;
      secondsText.textContent = Math.floor(remainsTime / 1000);
    }, 1000);
  }
  countdown(endDate);
}
