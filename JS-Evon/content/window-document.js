// 1. progressbar
{
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  document.body.appendChild(progressBar);
  document.addEventListener("scroll", handleProgressBar);
  function handleProgressBar() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const mainHeight = document.body.scrollHeight - viewportHeight;
    const percentTage = (scrollY / mainHeight) * 100;
    progressBar.setAttribute("style", `width: ${percentTage}%`);
  }
}
// 2. add attribute to links
{
  const links = document.querySelectorAll(".content a");
  links.forEach((item) => {
    const { hostname } = window.location;
    const href = item.getAttribute("href");
    if (href.includes(hostname)) return;
    item.setAttribute("target", "_blank");
  });
}
