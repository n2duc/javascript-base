let box = document.querySelector('.box1')
console.log([box])
//Show content in tag
let ct = document.querySelector('.content')
console.log([ct])
ct.innerHTML = 'New content'
console.log(ct.baseURI)
box.style.width = '200px'
box.style.height = '100px'
box.style.backgroundColor = 'red'

let box2 = document.querySelector('.box2')
// assign (kieu nhu gan)
Object.assign(box2.style, {
    width: '200px',
    height: '100px',
    display: 'inline-block'
})
console.log(box2.style.display)

// ==== ClassList Propety ====
/*
add
remove
toggle
contains
*/
console.log(box2.classList.value)
console.log(box2.classList.length)
box2.classList.add('title') //Them nhieu class chac nhau dau phay VD: add('title', 'dark', ...)
//Kiem tra class ton tai trong Element k?
console.log(box2.classList.contains('title'))
//Remove class
box2.classList.remove('title')
//Toggle - Co thi xoa, khong co thi them
setInterval(() => {
    box2.classList.toggle('toggle')
}, 1000)


// ==== DOM events ====
//1. Attribute events
//2. Assign event using the element node
//Mang tinh noi bot (VD: Click vao thang con -> Noi bot ra ngoai thang cha)
console.log(box)
box.onclick = (event) => {
    console.log(event)
    console.log(Math.floor(Math.random() * 100))
}
var inputElm = document.querySelector('input[type="text"]')
inputElm.onchange = (e) => {
    console.log(e.target.value)
}
var selectElm = document.querySelector('select')
selectElm.onchange = (e) => {
    console.log(e.target.value)
}
var exit = document.getElementById('exit')

//onkeyup - onkeydown
//onkeypress - Nhan du lien tuc duoc
exit.onkeyup = (e) => {
    // console.log(e.which)
    switch(e.which) {
        case 27:
            console.log("Exit")
            break;
    }
}
document.onkeypress = (e) => {
    // console.log(e.which)
    if(e.which == 51) {
        alert("Exit Now!")
    }
}

//preventDefault()
//Ngan chan hanh vi mac dinh
var linkElm = document.querySelectorAll('.link')
for (var i = 0; i < linkElm.length; i++) {
    linkElm[i].onclick = (e) => {
        if (!e.target.href.startsWith('https://www.facebook.com')) {
            e.preventDefault()
        }
    }
}

let ulElm = document.querySelector('ul')
ulElm.onmousedown = (e) => {
    e.preventDefault()
    //Bo di hanh vi mac dinh cua the ul khi nhan chuot xuong
}
ulElm.onclick = (e) => {
    console.log(e.target.textContent)
}
//stopPropagation()
//Ngăn chặn hành vi nổi bọt (click vào thằng con => nổi bọt ra ngoài thực hiện luôn thằng cha)
document.querySelector('.cha').onclick = () => {
    console.log('DIV')
}
document.querySelector('.con').onclick = (e) => {
    //Thằng này để ngăn chặn nổi bọt
    e.stopPropagation()
    //Không có cái này, khi click vào button sẽ hiện ra 'Click'
    //sau đó nổi bọt ra ngoài hiện thêm 'DIV' của thằng cha
    console.log('Click')
}


//==== Event Listener ====
//1. Xử lí nhiều việc khi 1 event xảy ra
//2. Lắng nghe/ Hủy bỏ lắng nghe

var btn = document.getElementById('btn')
//Cach viet 1
btn.addEventListener('click', () => {
    console.log('Lang nghe khong Huy')
})
//Cach viet 2
const example = () => {
    console.log('Lang nghe bi Huy')
}
btn.addEventListener('click', example)

//Hủy bỏ lắng nghe
setTimeout(() => {
    btn.removeEventListener('click', example)
}, 3000)