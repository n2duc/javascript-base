function arrToObj(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}
let arr = [
    ["name", "Thanh Long"],
    ["age", 18],
];

console.log(arrToObj(arr)); // { name: 'Thanh Long', age: 18 }
console.log(Object.fromEntries(arr));
