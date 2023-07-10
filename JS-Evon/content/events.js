{
  // const grandpa = document.querySelector(".grandpa");
  // const parent = document.querySelector(".parent");
  // const button = document.querySelector(".child");
  // button.addEventListener(
  //   "click",
  //   function (event) {
  //     console.log("click button");
  //   },
  //   {
  //     capture: true,
  //   }
  // );
  // parent.addEventListener(
  //   "click",
  //   function () {
  //     console.log("click parent");
  //   },
  //   {
  //     capture: true,
  //   }
  // );
  // grandpa.addEventListener(
  //   "click",
  //   function () {
  //     console.log("click grandpa");
  //   },
  //   {
  //     capture: true,
  //   }
  // );
}
document.addEventListener("click", function (event) {
  // console.log(`event.target: ${event.target}`);
  // console.log(`event.currentTarget ${event.currentTarget}`);
  const element = event.target;
  // console.log(`event.clientX: ${event.clientX}`);
  // console.log(`event.clientY: ${event.clientY}`);
  // console.log(`event.pageX: ${event.pageX}`);
  // console.log(`event.pageY: ${event.pageY}`);
  // if (element.matches("button")) {
  //   console.log("button");
  // }
});
{
  // const link = document.querySelector(".link");
  // link.addEventListener("click", function (event) {
  //   event.preventDefault();
  // });
  // const form = document.querySelector("form");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  // });
  // // input
  // const input = document.querySelector(".name");
  // input.addEventListener("change", function (event) {
  //   console.log(event.key);
  //   console.log(`event.target.value: ${event.target.value}`);
  // });
  // input.addEventListener("keydown", function (event) {
  //   console.log(`keydown: ${event.key}`);
  //   console.log(event.target.value);
  // });
  // input.addEventListener("keyup", function (event) {
  //   console.log(`keyup: ${event.key}`);
  //   console.log(event.target.value);
  // });
  // input.addEventListener("input", function (event) {
  //   if (event.key === "Enter") return;
  //   console.log(event.target.value);
  //   if (event.keyCode >= 48 && event.keyCode <= 57) {
  //     event.preventDefault();
  //     return;
  //   }
  //   console.log(event.key);
  // });
}

{
  // const buttonChild = document.querySelector(".child2");
  // buttonChild.addEventListener("mousemove", function () {
  //   console.log("mousemove");
  // });
}

{
  window.addEventListener("load", function () {
    console.log(`website loaded`);
    const loading = document.querySelector(".loading");
    loading.parentNode.removeChild(loading);
  });
  window.addEventListener("scroll", function () {
    console.log(`scroll`);
  });
  window.addEventListener("resize", function () {
    console.log(`resize`);
  });
  document.addEventListener("DOMContentLoaded", () => {});
}
{
  // drag drop events
  // css events: transitionend, animationend
}
