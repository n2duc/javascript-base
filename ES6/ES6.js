// Enhanced Object Literals
/* 
Định nghĩa key: value cho object
Định nghĩa method cho object
Định nghĩa key cho object dưới dạng biến
*/

// Template literals
let tien = 1000
console.log(`Tien ${tien}`)

//============ Escaping Characters ============
let quote = "He said, \"I learned from freeCodeCamp!\"";
console.log(quote); // He said, "I learned from freeCodeCamp!"
// Multi-line Strings
let desc = `
    Nguyen Ngoc Duc
    Xin Chao
    Hello
`

// ============Tagged Template Literals============
function hightlight([first, ...strings], ...value) {
    console.log('first: ', first)
    console.log('strings: ', strings)
    console.log('value: ', value)
}
let ten = 'Duc'
let age = 20
let info = hightlight`Toi ten la ${ten}, toi ${age} tuoi`
console.log(info)

// ========== Modules =============
/*
import / export
 */

// ============Optional Chaining (?.)============
const opChaining = {
    name: 'Duc',
    age: {
        name: 'Ngoc',
        age2: {
            name: 'Nguyen'
            // nếu không có age2.name console.log ra sẽ lỗi
        }
    }
}
//Kieu cu
if (opChaining.age && opChaining.age.age2) {
    console.log(opChaining.age.age2.name)
}
//Kieu su dung ?.
console.log(opChaining?.age?.age2.name)


// ============Destructuring Assignment============
const obj = {
    a: 1,
    b: 2
}
const { c, d } = obj; // c = a = 1, d = b = 2
function exA() {
    return {
        a: 1,
        b: 2,
        c: () => { }
    }
}
const { m, n, o } = exA() // o là một function 
// Spread Operator (..._)
const arr1 = [1,2,3,4]
const arr2 = [...arr1]
Math.max(1, 3, 5) // output: 5
Math.max([1, 3, 5]) // output: NaN

Math.max(...[1, 3, 5]) // output: 5
// ==> Math.max(1,3,5)

// Rest
// gôm những giá trị không được khai báo vào 1 biến, sử dụng trong tham số trong function
const rest = (a, b, ...params) => {
    console.log(a)
    console.log(b)
    console.log(params)
}
const arr3 = [1,2,3,4,4]
rest(...arr3)
// Default Parameter Value
const Car = (a, b, c = 5) => {
    console.log(a)
    console.log(b)
    console.log(c)
}
Car(2,3)
Car(2,3,4)

// Arrow Function ( ()=> {})