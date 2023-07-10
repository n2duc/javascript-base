// 1. animation bg
{
  const bg = document.querySelector(".animate-bg");
  const menuItems = document.querySelectorAll(".menu-item");
  const menuList = document.querySelector(".menu");
  menuList.addEventListener("mouseleave", function () {
    bg.removeAttribute("style");
  });
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
      const element = this;
      const elementCoords = element.getBoundingClientRect();
      bg.setAttribute(
        "style",
        `transition: all 0.25s linear; left: ${elementCoords.left}px; top: ${
          elementCoords.top + window.clientY
        }px; width: ${elementCoords.width}px; height: ${elementCoords.height}px`
      );
    });
  });
}
