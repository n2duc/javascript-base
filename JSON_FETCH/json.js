//Là một định dạng dữ liệu (chuỗi)
//Javascript Object Notation
//JSON: Number, Boolean, null, Array, Object
// Encode (Mã hóa) - Decode (Giải mã)
// Stringify: Từ JS Types -> JSON
// Parse: Từ JSON -> JS Types

let json = '["JS","Java","Python"]'
let obj = '{"name":"Duc", "age": 18 }'
console.log(json)
const array = JSON.parse(json)
array.forEach(a => {
    if (a.startsWith('J')) {
        console.log(a)
    }
})

console.log(obj)
const objcv = JSON.parse(obj)
console.log(objcv.name);

console.log(JSON.stringify('a'))