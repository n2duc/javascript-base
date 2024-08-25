const newArray = [2, 3, 6, 2, 7, 3, 9, 7, 4];

function sortIncre(a, b) {
    return a - b
}
const otherArray = newArray.sort(sortIncre);


function firstFunc() {
    console.log("Hello");
}

const thirdFunc = () => {
    console.log("Hello");
}

function duyetmang(element, index) {
    console.log(`Phần tử thứ ${index} là: ${element}`);
}
// newArray.forEach((element, index) => {
//     console.log(`Phần tử thứ ${index} là: ${element}`);
// })

// map: tạo ra mảng mới từ mảng cũ
const mapArray = newArray.map((item, index) => {
    return `${item}${index}`;
})
// console.log(mapArray)

// filter: lọc ra các phần tử thỏa mãn
const filterArray = newArray.filter((item, index) => {
    return item*2 > 5
})
// console.log(filterArray)

// console.log(newArray.includes(3))

const nameArray = ["Ngoc", "Duc", "Nguyen"];
nameArray.pop("Lord")
// join: chuyển mảng thành chuỗi, tra ve gia tri
const fullName = "Pham Ngoc Anh"
const splitName = fullName.split(" ") // Tra ve mang

const myName = "Ngoc Duc"
const newNameMother = myName.split("").reverse().join("")


