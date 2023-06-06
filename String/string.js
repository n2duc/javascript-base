const nameAuthor = "Nguyen Ngoc Duc";
const newAuthor = nameAuthor.split(" ");
console.log("Run:", newAuthor)
console.log("Result:", newAuthor.join(" "));
// Hello World => dlroW olleH
const helloWorld = "Hello World";
console.log(helloWorld.slice(0, 5))
const newHelloWorld = helloWorld.split("").reverse().join("");
// console.log(newHelloWorld)
const newName = "Duccccc";
const newNewName = [...new Set(newName.split(""))].join("")
// console.log(newNewName)
console.log(nameAuthor.substring(0, 6))