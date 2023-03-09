const Numbers = [4, 5, 7, 2, 9, 56, 34, 12]
const Lang = {
    name: 'JavaScript',
    level: 9,
    usage: ['FrontEnd', 'BackEnd']
}
const Food = [
    'Pho',
    'Che',
    'ComTam',
    'BanhXeo',
    'ThuocLao',
    'CaRem'
]

const code = (x, y) => x + y
// document.getElementById("demo").innerHTML = `${Lang.name} - Your skill level ${Lang.level} up to ${code(Lang.level, 1)}`


function Sum(...args) {
    let sum = 0;
    for (let a of args) sum += a;
    return sum;
}
let SumofNumber = Sum(12, 43, 123, 534)
// document.getElementById("demo1").innerHTML = `Sum of Number is : ${SumofNumber}`;

const first = Numbers.find(FirstNum);

function FirstNum(value, index, array) {
    return value > 18;
}
// document.getElementById("demo2").innerHTML = `First of Number from Array: ${first}`

//contructor object
const User = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return `${firstName} ${lastName}`
    }
}
User.prototype.country = 'Viet Nam';
User.prototype.getCountry = function() {
    return `Country: ${this.country}`;
}
const person = new User('Nguyen', 'Duc', 19);
const person1 = new User('Quynh', 'Nhu', 19);

document.write(person.country)
document.write(person.getFullName())
document.write(person1.getCountry())

// Day object
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes() + 1;
// document.getElementById("day").innerHTML = `Today: ${day}/${month}/${year} Time ${hour}:${minute}`;

//Math Object - Random
const fruits = ['Apple', 'Orange', 'Banana', 'Lemon', 'Coconut']
const random = Math.floor(Math.random() * fruits.length);

if (fruits[random] == fruits[3]) {
    // document.getElementById("random").innerHTML = `${fruits[random]} - Chua vãi cả lồn`;
} else {
    // document.getElementById("random").innerHTML = fruits[random];
}

//Ternary operator (Toán tử ba ngôi)
const n = Math.floor(Math.random() * 100)

function Ternary(n) {
    return (n > 50) ? 'True' : 'False';
}
// console.log(Ternary(n))


// Loop - Array - Math

function getRandNumbers(min, max, length) {
    const respon = []
    for (var i = 0; i < length; i++) {
        const randNum = Math.floor(Math.random() * (max - min) + min)
            //tạo ra 1 số ngẫu nhiên trong khoảng min - max
        respon.push(randNum)
    }
    return respon
}
// console.log(getRandNumbers(2, 10, 5))

//For
const foodLength = Food.length;
for (var i = 0; i < foodLength; i++) {
    // console.log(Food[i])
}
//For_in
function run(Lang) {
    const array = []
    for (var key in Lang) {
        array.push(`${key}: ${Lang[key]}`)
    }
    return array;
}
// console.log(run(Lang))

//Đệ quy
// 1.Xác định điểm dừng
// 2. Tạo điểm dừng
function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}
function fibo(n) {
    if (n == 0 || n == 1) return n
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(7))

const array = ['Hello', 'Hi', 'Bye', 'Thanks'];
loop(0, array.length, function(index) {
    // console.log(array[index]);
})

//Giai thua bang De Quy
const giaiThua = (num) => {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(2))

//String/Array includes() method
const stringInclude = "Nguyen Ngoc Duc"
const arrayIncludes = ['Nguyen', 'Ngoc', 'Duc']

console.log(stringInclude.includes("Nguyen", 0))

//3+ -2 (Nếu ra âm thì mặc định là 0)
//length of array is 3 => 3+ -2 = 1
//fromIndex: tim tu vi tri x
console.log(arrayIncludes.includes('Ngoc', -2))