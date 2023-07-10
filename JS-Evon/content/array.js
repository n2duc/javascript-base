// 1. Declaration
const students = [
  "Lam",
  "Duong",
  "Tuan",
  28,
  false,
  null,
  undefined,
  0,
  [false, true, "evondev"],
];
// built-in constructor
const studentsWay = new Array(
  "Lam",
  "Duong",
  "Tuan",
  28,
  false,
  null,
  undefined,
  0,
  999
);
const students2 = students;
// console.log(students === students2); // false
// access first value
students[0] = "Nam";
// console.log(students[0]);
// get length of array
const studentsLength = students.length;
// console.log(studentsLength);
// access last value
// console.log(students[studentsLength - 1]);
// return undefined if value not existed in array
// console.log(students[99]);
const numbers = [1, 2, 5, 7, 9, 13, 22, 55, 88, 0, 100, 1000, 7, 29];
// return new array with x2 each value
// 2. map method
const numberX2 = numbers.map((value, index, array) => {
  return value * 2;
});
// console.log(numbers);
// console.log(numberX2);
// 3. forEach
numbers.forEach((value, index, array) => {
  // console.log(value);
  return value * 5;
});
// console.log(numbers);
// 3. clone array, using spread operator [...], Array.from()
const cloneNumber1 = [...numbers];
const cloneNumber2 = Array.from(numbers);
// 4. sort
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("sortedNumbers:", sortedNumbers);
// 5. push(value)
numbers.push(44);
// 6. unshift(value)
numbers.unshift(88);
// 7. pop()
const popNumber = numbers.pop(); // 44
// 8. shift()
const shiftNumber = numbers.shift(); // 88
// 9. some(callback)
const isGreaterThan10 = numbers.some((item) => item > 10);
console.log("isGreaterThan10:", isGreaterThan10); // true
// 10. every(callback)
const isAllThan10 = numbers.every((item) => item > 10);
console.log("isAllThan10:", isAllThan10); // false
console.log("original numbers:", numbers);
// 11. find
const findNumber1000 = numbers.find((item) => item === 99999);
console.log("findNumber1000:", findNumber1000);
// 12. findIndex
const indexOf1000 = numbers.findIndex((item) => item === 100000);
console.log("indexOf1000:", indexOf1000);
// 12. findLastIndex
const lastIndexOf7 = numbers.findLastIndex((item) => item === 7);
console.log("lastIndexOf7:", lastIndexOf7);
// 13. reverse
const reverseNumbers = [...numbers].reverse();
console.log("reverseNumbers:", reverseNumbers);
// 14. filter
const filterNumber = numbers.filter((num) => num > 50);
console.log("filterNumber:", filterNumber);
// 15. includes
const isInclude1000 = numbers.includes(1000);
console.log("isInclude1000:", isInclude1000);
// 16. concat, spread operator
const newNumbers = [1, 2, 3, 4, 5, 6, 7];
const mergeNumbers = numbers.concat(newNumbers, [5, 6, 7], [9, 88, 77]);
const mergeNumbers2 = [...numbers, ...newNumbers, ...[5, 6, 7], ...[9, 88, 77]];
console.log("mergeNumbers2:", mergeNumbers2);
console.log("mergeNumbers:", mergeNumbers);
// 17. flat
const complexArray = [
  1,
  2,
  3,
  [
    [
      [4, 5, 6],
      [7, 8, 9],
    ],
    [[[1, 2, 3]]],
  ],
];
// -> [1,2,3,4,5,6,7,8,9,1,2,3]
const flatComplexArr = complexArray.flat(Infinity);
console.log("flatComplexArr:", flatComplexArr);
// 18. Array.isArray
console.log(Array.isArray(numbers)); // true
// 19. slice(start, end - 1)
const sliceNumber = numbers.slice(6, 10);
console.log("numbers:", numbers);
console.log("sliceNumber:", sliceNumber);
// 20. splice
const zeroIndex = numbers.findIndex((item) => item === 0);
console.log("zeroIndex:", zeroIndex);
// const spliceNumber = numbers.splice(0, 0, 99, 88, 77, 66);
const spliceNumber = [...numbers].splice(zeroIndex, 1);
console.log("spliceNumber:", spliceNumber);
// 21. at
console.log(numbers.at(-1));
console.log(numbers.at(0));
// 22. toString
console.log([].toString()); // ""
// [] + [] -> ""
// {} + [] + {} + [] -> "[object object][object object]"
// 23. reduce
// "i am evondev" -> "evondev am i"
const str = "i am evondev";
const reverseStr = str.split(" ").reduce((previous, current) => {
  return current + " " + previous;
}, "");
console.log("reverseStr ~ reverseStr:", reverseStr);
const total = numbers.reduce((previous, current, index, array) => {
  console.log("total ~ current:", current);
  console.log("total ~ previous:", previous);
  return previous + current;
}, 0);
console.log("total ~ total:", total);
// 24. fill
const filledNumber = numbers.fill(9, 10);
console.log("filledNumber:", filledNumber);
// 25. destructuring
const languages = ["html", "css", "javascript", "react", "vue", "angular"];
// const [html, css, javascript, react, vue, angular] = languages;
// rest parameter
const [html, ...others] = languages;
// const html = languages[0];
// const others = languages.slice(1);
console.log("others:", others);
// const css = languages[1];
// const javascript = languages[2];
// const react = languages[3];
// const vue = languages[4];
// const angular = languages[5];
// 26. clone array
let age = 29;
let yourAge = age;
console.log("yourAge:", yourAge);
age = 28;
console.log("age:", age);

let originalList = [1, [2], 3];
// deep clone
let copyList = JSON.parse(JSON.stringify(originalList));
copyList[0] = "👻"; // change shallow element
copyList[1][0] = "💩"; // change nested element
console.log("copyList:", copyList);
console.log("originalList:", originalList);
