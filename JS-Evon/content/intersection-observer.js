// 1. intersection observer API
// https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
const observer = new IntersectionObserver(
  (entries, observ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.setAttribute(
          "src",
          "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        );
        observ.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
    root: null,
    rootMargin: "0px",
  }
);
const images = document.querySelectorAll(".content img");
images.forEach((image) => {
  observer.observe(image);
});
