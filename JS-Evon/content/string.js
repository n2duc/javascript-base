// 1. Quote '' "" ``
const myName = "evonDevD";
const myHobbies = "Badminton";
console.log("myName:", myName);
const study = `My name is ${myName} and I would love to play ${myHobbies}`;
const study2 =
  "My name is " + myName + " " + "and I would love to play " + myHobbies;
console.log("study2:", study2);
console.log("study:", study);
// 2. index(position), length
console.log(`myName[0] is : ${myName[0]}`); // e
console.log(`length of myName is ${myName.length}`); // 7
console.log(`last character of myName is ${myName[myName.length - 1]}`); // v
// 3. Methods
const upperName = myName.toUpperCase(); // EVONDEV
console.log("upperName:", upperName);
const lowerName = myName.toLowerCase(); // evondev
console.log("lowerName:", lowerName);
const includeName = myName.includes("evon"); // true
const notIncludeName = myName.includes("tuan"); // false
const indexOfName = myName.indexOf("D"); // found index: 4
const indexOfName2 = myName.indexOf("z"); // not found: -1
console.log("indexOfName:", indexOfName);
const lastIndexOfName = myName.lastIndexOf("D");
console.log("lastIndexOfName:", lastIndexOfName);
const repeatMyName = myName.repeat(5);
console.log("repeatMyName:", repeatMyName);
const replaceName = myName.replace("evon", "tuan");
console.log("replaceName:", replaceName);
const replaceAllName = myName.replaceAll("D", "Z");
console.log("replaceAllName:", replaceAllName);
const sliceName = myName.slice(0, 5); // start -> end-1 evonD
const sliceNameAll = myName.slice(); // evonDevD
const sliceName2 = myName.slice(5); // evD
console.log("sliceName2:", sliceName2);
console.log("sliceNameAll:", sliceNameAll);
console.log("sliceName:", sliceName);
const splitName = myName.split(""); //split each character ["e","v","o","n","D","e","v","D"]
console.log("splitName:", splitName);
const myWay = "I love the way go to school"; // split each word
const myNameSplit = myWay.split(" "); // ["I","love","the","way","go","to","school"]
console.log("myNameSplit:", myNameSplit);
// concat methods
// "I-love-the-way-go-to-school"
const myWayDash = myWay.split(" ").join("-");
console.log("myWayDash:", myWayDash);
const myStudentName = "Tran Lam";
// .split(" ") -> ["Tran", "Lam"] -> .reverse() -> ["Lam", "Tran"] -> .join(" ")
const myStudentNameReverse = myStudentName.split(" ").reverse().join(" ");
console.log("myStudentNameReverse:", myStudentNameReverse);
const myNameStartsWith = myName.startsWith("evon"); // true
const myNameEndsWith = myName.endsWith("evon"); // false

const myNameCharAt = myName.charAt(5); // evonDevD
console.log("myNameCharAt:", myNameCharAt); // e
const concatStr = myName.concat(myHobbies);
console.log("concatStr:", concatStr);
const getValueFromServer = "    Do Trung Duong    ";
const trimValueFromServer = getValueFromServer.trim(); // Do Trung Duong
// trimStart -> Do Trung Duong
// trimEnd ->       Do Trung Duong
console.log("trimValueFromServer:", trimValueFromServer);
const myLovelyCat = "My Dieu";
const mySubstringCat = myLovelyCat.substring(2); //  Dieu
const mySubstringCat2 = myLovelyCat.substring(1, 5); //  y Di
console.log("mySubstringCat2:", mySubstringCat2);
console.log("mySubstringCat:", mySubstringCat);
const a = false;
console.log(a.toString());
