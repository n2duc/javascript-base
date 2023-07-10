// 1. Login form
{
  const loginForm = document.querySelector("#login-form");
  const toast = document.querySelector(".toast");
  function handleLogin(event) {
    event.preventDefault();
    const name = this.elements["username"].value;
    const password = this.elements["password"].value;
    if (!name || !password) {
      toast.textContent = "Name and password is required";
      toast.classList.add("is-open");
      setTimeout(function () {
        toast.classList.remove("is-open");
      }, 2000);
      return;
    }
  }
  loginForm.addEventListener("submit", handleLogin);
}
{
}
