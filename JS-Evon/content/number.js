// interger: 1, 9, 5
// float(decimal): 0.45, 7.3
// NaN: Not a Number
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof "evondev"); // string
const myAge = null;
// Methods
console.log(parseFloat("123.45sdfdsf")); // 123.45
console.log(parseInt("123.45dsfdsf")); // 123
console.log(Number("123s")); // NaN
console.log(+"123"); // 123
// 123.938475897 -> 123.938
const count = 123.987; // 123.99
// "123.987" -> ["123", "987"] -> "987" -> 99
console.log(count.toFixed(3)); // lấy decimal theo số lượng nhưng làm tròn
console.log(count.toString()); // biến thành String
console.log(Math.floor(123.98)); // làm tròn xuống
console.log(Math.ceil(123.98)); // làm tròn lên
console.log(Math.round(123.49)); // làm tròn gần nhất
console.log(Math.min(1, 5)); // tìm số nhỏ hơn
console.log(Math.max(1, 5)); // tìm số lớn hơn
console.log(Math.pow(3, 2)); // mũ
console.log(Math.abs(-10)); // giá trị tuyệt đối
console.log(Math.sqrt(9)); // căn bậc 2
const dec = 987.098454;
console.log(Math.floor(15.7784514 * 100) / 100); // lấy decimal
console.log(5 + 5);
console.log(5 - 5);
console.log(5 / 0); // Infinity
console.log((5 + 6) * 3);
console.log(7 / 2); // 3
console.log(7 % 2); // 1
let five = 5;
console.log(++five); // 5
console.log(`five: ${five}`); // 6
// console.log(++five); // 5
// console.log(five--); // 5
let myScore = 10;
myScore = myScore + 1; // myScore++
myScore += 1;
myScore += 5;
myScore *= 5;
myScore /= 5;
