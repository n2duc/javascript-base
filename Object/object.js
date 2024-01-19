const User = {
    name: 'John',
    age: 30,
    say: function sayHi() {
        console.log(`Hello my name is ${this.name}`);
    },
    address: {
        city: 'Da Nang',
    }
}
// User.say();
User.sport = 'Football';
console.log("User", User);

// === Copy Object ===
// Copy Object có 2 loại: Shallow copy và Deep copy
// Shallow copy: Có thể thay đổi thuộc tính của object
const cloneUser = User;  // Không nên dùng cách này
// cloneUser.name = "Ngoc Duc"
// console.log("cloneUser", cloneUser);

// Object.assign() Method
const User2 = Object.assign({}, User); // Đối với phương thức assign thì cũng là shallow copy
User2.name = "Ngoc Duc"; // Không thay đổi giá trị name của User
User2.address.city = "Ha Noi"; // Thay đổi giá trị của address.city của User
console.log("User", User);

// JSON.parse() Method
const User3 = JSON.parse(JSON.stringify(User)); // Deep copy
User3.name = "Ngoc Duc"; // Không thay đổi giá trị name của User
User3.address.city = "Ho Chi Minh"; // Không thay đổi giá trị của address.city của User
console.log("User3", User3);
console.log("User", User);

// Spread Method
const User4 = { ...User }; // Shallow copy, giống như Object.assign
User4.name = "Woody"; // Không thay đổi giá trị name của User
User4.address.city = "Quang Tri" // Thay đổi giá trị của address.city của User
console.log("User4", User4);
console.log("User", User);


// ===Delete Object Property===

delete User.address.city; // Cách này sẽ ảnh hưởng trực tiếp đến object User
console.log("User", User);
//delete object property using spread operator
const { address, ...User5 } = User; // Copy ra object mới và xóa thuộc tính đó
console.log("User5", User5);

//using the Reflect.deleteProperty() to delete property from object
Reflect.deleteProperty(User5, 'age');
console.log("User5", User5);

const hobby = undefined ?? "Badminton";
console.log("hobby:", hobby);

let your_drink;
let reverse = function(s) {
    return s.split("").reverse().join("");
}
let barista = {
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference) {
        return preference + ".Secret word:" + this.str2 + this.str3 + this.str1;
    }
};
console.log(barista.request(your_drink));