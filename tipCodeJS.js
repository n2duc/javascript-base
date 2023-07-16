const nameAuthor = "Ngoc Duc";
const nameRevert = nameAuthor.split("").reverse().join("");
const name2 = nameAuthor.split(" ").reverse().join(" ");
console.log(name2);

// Xoa phan tu trung trong mang
const arr = [1,1,1,2,3,3,4,4,4,4,5]
// Doi voi Array la string
const arrString = ["Duc", "Duc", "Thuong", "Thuong", "Thuong", "Thuong", "Nhu"]
// Cach 1 (dai)
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);
// Cach 2 (Ngan gon)
const newArr = [...new Set(arrString)];
console.log(newArr)


// Sort Array number
const numbers = [4,2,1,3,5]