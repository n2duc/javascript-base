// 1. Modal
{
  // hardcode
  const loginBtn = document.querySelector(".button-login");
  const loginModal = document.querySelector("#modal-login");
  const isOpenClass = "is-open";
  const modalClose = loginModal.querySelector(".modal-close");
  const modalOverlay = loginModal.querySelector(".modal-overlay");
  function handleToggleModal() {
    loginModal.classList.add(isOpenClass);
  }
  function handleCloseModal() {
    loginModal.classList.remove(isOpenClass);
  }
  loginBtn.addEventListener("click", handleToggleModal);
  modalOverlay.addEventListener("click", handleCloseModal);
  modalClose.addEventListener("click", handleCloseModal);
}
// 2. Tab
{
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-inner-content");
  const isActiveClassName = "is-active";
  function handleActiveTab(event) {
    const tabName = event.target.dataset.tab;
    tabItems.forEach((tab) => tab.classList.remove(isActiveClassName));
    this.classList.add(isActiveClassName);
    tabContents.forEach((item) => {
      item.classList.remove(isActiveClassName);
      if (item.dataset.tab === tabName) item.classList.add(isActiveClassName);
    });
  }
  tabItems.forEach((tab) => tab.addEventListener("click", handleActiveTab));
}
// 3. Password toggle
{
  const showPasswordBtn = document.querySelectorAll(".show-password");
  function handleTogglePassword(event) {
    const _this = event.currentTarget;
    // console.log(this);
    // console.log(event.currentTarget);
    const input = this.previousElementSibling;
    const inputType =
      input.getAttribute("type") === "text" ? "password" : "text";
    this.classList.toggle("is-show");
    input.setAttribute("type", inputType);
  }
  showPasswordBtn.forEach((item) =>
    item.addEventListener("click", handleTogglePassword)
  );
}
