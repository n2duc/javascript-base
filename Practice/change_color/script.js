const text = document.querySelector(".color-text");
const mainColor = document.querySelector(".main-color");
// mainColor.style.background = '#000'
const colorItem = document.querySelectorAll(".color-item");
colorItem.forEach((color) => {
    color.addEventListener("click", () => {
        const nameColor = color.dataset.color;
        mainColor.style.background = nameColor;
        text.innerText = nameColor;
        // Khong dung dataset
        // const style = getComputedStyle(color);
        // mainColor.style.background = style.background;
    });
});

const addColorBtn = document.querySelector(".add-btn");
addColorBtn.onclick = () => {
    const inputColor = document.querySelector(".input-color");
    const nameColor = inputColor.value;
    mainColor.style.background = nameColor;
    text.innerText = nameColor;
}