{
  // 1. setTimeout
  // const timer = 1000 * 5;
  // setTimeout(() => {
  //   console.log("hello from setTimeout");
  // }, timer);
  // 2. setInterval
  // setInterval(() => {
  //   console.log("running");
  // }, 1000);
}
{
  const time = document.querySelector(".stop-watch");
  const stopWatchBtn = document.querySelector(".stop-watch-btn");
  stopWatchBtn.addEventListener("click", handleStopWatch);
  let isStart = false;
  let timer;
  function handleStopWatch() {
    // button is clicked
    if (isStart) {
      // stop interval
      clearInterval(timer);
      // isStart = false
      isStart = !isStart;
      stopWatchBtn.textContent = isStart ? "Stop" : "Start";
      return;
    }
    // isStart = true
    isStart = !isStart;
    stopWatchBtn.textContent = isStart ? "Stop" : "Start";
    timer = setInterval(() => {
      time.textContent = parseInt(time.textContent) + 1;
    }, 10);
  }
}
