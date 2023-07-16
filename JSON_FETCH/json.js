//Là một định dạng dữ liệu (chuỗi)
//Javascript Object Notation
//JSON: Number, Boolean, null, Array, Object
// Encode (Mã hóa) - Decode (Giải mã)
// Stringify: Từ JS Types -> JSON
// Parse: Từ JSON -> JS Types

let json = '["JS","Java","Python"]'
let obj = '{"name":"Duc", "age": 18 }'
// console.log(json)
const array = JSON.parse(json)
array.forEach(a => {
    if (a.startsWith('J')) {
        // console.log(a)
    }
})

// console.log(obj)
const objcv = JSON.parse(obj)
// console.log(objcv.name);

// console.log(JSON.stringify('a'))


let stringToObj = '{"name":"Duc", "age": 18 }'
let objToString = {
    username: "n2duccc",
    password: "Duc2002",
    city: {
        name: "Da Nang",
    }
}
// console.log(objToString);

console.log("String to OBJ", JSON.parse(stringToObj));
console.log("OBJ to String", JSON.stringify(objToString));

let copyObjectJSOn = JSON.parse(JSON.stringify(objToString)); //Best choice - Deep Copy
let copyObjectSpread = { ...objToString } //Shallow Copy
// console.log(copyObjectExample);
copyObjectSpread.city.name = "Quang Tri";
console.log(copyObjectSpread);
console.log(objToString);