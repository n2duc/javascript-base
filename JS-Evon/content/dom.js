{
  // SELECTORS
  // 1. querySelector
  const body = document.body;
  const header1 = body.querySelector("#header1");
  const header = document.querySelector("#header");
  const item = document.querySelector(".item2");
  // 2. querySelectorAll
  const items = document.querySelectorAll(".item");
  // 3. getElementsByClassName
  const itemsClassName = document.getElementsByClassName("item");
  console.log("itemsClassName:", itemsClassName);
  // 4. getGelementsByTagName
  const itemsTagName = document.getElementsByTagName("div");
  console.log("itemsTagName:", itemsTagName);
  // 5. getElementById
  const headerId = document.getElementById("header");
  console.log("headerId:", headerId);
}
{
  // ATTRIBUTES
  const link = document.querySelector("a");
  // 1. getAttribute
  const linkHref = link.getAttribute("href");
  console.log("linkHref:", linkHref);
  // 2. setAttribute
  link.setAttribute("target", "_blank");
  // 3. removeAttribute
  link.removeAttribute("target");
  // 4. hasAttribute
  console.log(link.hasAttribute("target"));
  const links = document.querySelectorAll("a");
  links.forEach((item) => {
    item.setAttribute("target", "_blank");
  });
  const inputPassword = document.querySelector(`input[type="password"]`);
  // inputPassword.setAttribute("type", "text");
  // const data = ``;
  // <div className="post-content">{data}</div>;
}
{
  // CONTENT
  const eyeBtn = document.querySelector(".eye");
  // 1.textContent
  console.log(eyeBtn.textContent);
  eyeBtn.textContent = "evondev";
  // 2. innerText
  console.log(eyeBtn.innerText);
  // 3. innerHTML
  console.log(eyeBtn.innerHTML);
  eyeBtn.innerHTML = `<div class='item'>Show password inner</div>`;
}
{
  // CLASS ATTRIBUTE
  const inputPassword = document.querySelector(`input[type="password"]`);
  // 1. classList.add
  inputPassword.classList.add("password");
  // 2. classList.remove
  inputPassword.classList.remove("input");
  // 3. classList.contains
  console.log(inputPassword.classList.contains("password"));
  // 4. classList.toggle
  // inputPassword.classList.toggle("password");
  // 5. className
  const inputPwdClass = inputPassword.getAttribute("class");
  console.log("inputPwdClass:", inputPwdClass);
  // const arr = ["a", "b"];
  // arr.forEach((item) => {
  //   inputPassword.classList.add(item);
  // });
  inputPassword.className = `${inputPwdClass} animation outline`;
}
{
  // CREATE ELEMENT
  const root = document.documentElement;
  const body = document.body;
  // 1. document.createElement
  const button = document.createElement("button");
  button.classList.add("follow");
  button.textContent = "Follow me";
  // 2. appendChild
  body.appendChild(button);
}
{
  // CLONE NODES
  const eyeBtn = document.querySelector(".eye");
  // 1. cloneNode
  const eyeBtnClone = eyeBtn.cloneNode(1);
  console.log("eyeBtnClone:", eyeBtnClone);
  // 2. hasChildNode
  const text = document.querySelector("p.empty");
  console.log(text.hasChildNodes());
}
{
  // INSERT
  // 1. insertAdjacentText
  const text = document.querySelector("p.empty");
  text.insertAdjacentText("afterbegin", "My name is ");
  text.insertAdjacentText("beforeend", " and I am Frontend Developer");
  // 2. insertAdjacentElement
  const span = document.createElement("span");
  span.classList.add("special");
  span.textContent = "special";
  text.insertAdjacentElement("beforeend", span);
  // 3. insertAdjacentHTML
  const body = document.body;
  const menuTemplate = `<ul class="menu">
    <li class="menu-item">
      <span class="menu-text">Home</span>
    </li>
    <li class="menu-item">
      <span class="menu-text">About</span>
    </li>
    <li class="menu-item">
      <span class="menu-text">Contact</span>
    </li>
  </ul>`;
  body.insertAdjacentHTML("beforeend", menuTemplate);
  // 4. insertBefore
  body.insertBefore(span, text);
}
{
  // TRAVERSING
  // 1. parentNode, parentElement
  const listItem = document.querySelector(".list-item");
  console.log(listItem.parentNode.parentNode.parentNode.parentNode);
  // 2. previousElementSibling
  const longText = listItem.parentNode.previousElementSibling;
  console.log("longText:", longText);
  // 3. nextElementSibling
  const list = longText.nextElementSibling;
  console.log("list:", list);
  // 4. firstElementChild
  console.log(list.firstElementChild);
  // 5. lastElementChild
  console.log(list.lastElementChild);
  // 6. children
  console.log(list.children);
  console.log(list.children[1]);
  // 7. firstChild(include space, \n)
  console.log(list.firstChild);
  // 8. lastChild(include space, \n)
  console.log(list.lastChild);
  // 9. childNodes
  console.log(list.childNodes);
  // 10. nextSibling, previousSibling
}
{
  // OFFSET
  const squareBox = document.querySelector(".square");
  if (squareBox) {
    console.log(`squareBox.offsetHeight: ${squareBox.offsetHeight}`);
    console.log(`squareBox.offsetWidth: ${squareBox.offsetWidth}`);
    console.log(`squareBox.offsetTop: ${squareBox.offsetTop}`);
    console.log(`squareBox.offsetLeft: ${squareBox.offsetLeft}`);
    console.log(squareBox.offsetParent);
  }
}
{
  // CLIENT
  const squareBox = document.querySelector(".square");
  console.log(`squareBox.clientWidth: ${squareBox.clientWidth}`);
  console.log(`squareBox.clientHeight: ${squareBox.clientHeight}`);
  console.log(`squareBox.clientTop: ${squareBox.clientTop}`);
  console.log(`squareBox.clientLeft: ${squareBox.clientLeft}`);
}
{
  // WINDOW
  console.log(`window.scrollX: ${window.scrollX}`);
  console.log(`window.scrollY: ${window.scrollY}`);

  console.log(`window.innerWidth: ${window.innerWidth}`);
  console.log(`window.outerWidth: ${window.outerWidth}`);

  console.log(`window.innerHeight: ${window.innerHeight}`);
  console.log(`window.outerHeight: ${window.outerHeight}`);

  console.log(`window.screenX: ${window.screenX}`);
  console.log(`window.screenLeft: ${window.screenLeft}`);

  console.log(`window.screenY: ${window.screenY}`);
  console.log(`window.screenTop: ${window.screenTop}`);
}
{
  // getBoundingClientRect
  const squareBox = document.querySelector(".square");
  console.log(squareBox.getBoundingClientRect());
  document.title = "Javascript is mindblow";
  document.head.insertAdjacentHTML("beforeend", `<link href="abc.css"/>`);
  document.body.replaceChild(squareBox, document.querySelector(".item"));
}
{
  // remove item
  // item.parentNode.removeChild(item)
}
