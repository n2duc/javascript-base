const animals = ["ant", "bison", "camel", "duck", "elephant"];
// Map method array
const map1 = animals.map((x) => x.length);
// console.log(map1);
const newAni = animals.forEach((element) => {
    // console.log(element);
});
const filterAni = animals.filter((element) => element.length > 3);
console.log(filterAni);
const findAnimals = animals.find((element) => element === "ant");
console.log(findAnimals);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumArray = array.reduce((total, currentValue) => total + currentValue);
console.log(sumArray);
// Thay doi mang goc
// array.sort((a, b) => a - b);
array.splice(2, 1);
array.splice(2, 0, 10);
// console.log(array)

const myCar = ["Saab", "Volvo", "BMW"];
const carString = JSON.stringify(myCar);
// Tra ve dang chuoi JSON
//=> "["Saab","Volvo","BMW"]"
const user = {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi",
    email: "nguyevana@gmail.com"
}
const userStr = JSON.stringify(user);
const setUser = JSON.parse(userStr, (key, value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value + " tuoi";
    }
    return value;
})
console.log(setUser);

const backCar = JSON.parse(carString);
// Tra ve dang mang ( doi tuong Javascript)
const user2 = JSON.stringify(setUser, (key, value) => {
    if (key === "email") return undefined;
    return value;
});
console.log(user2);
