// Sync - Đồng bộ
// Async - Bất đồng bộ
// Async in JS: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

// VD về bất đồng bộ
/*
setTimeout(() => {
    console.log("First")
}, 2000)

console.log("Second")
*/

// === Promise ===
// Callback hell
setTimeout(function () {
    // console.log(1)
    setTimeout(function () {
        // console.log(2)
        setTimeout(function () {
            // console.log(3)
        }, 1000);
    }, 1000);
}, 1000);

// Object constructor promise
let promise = new Promise(
    // Executor function
    function (resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        // Fake call API
        resolve([{ id: 1, name: "javascript" }]);
        // reject('Error!')
    }
);
// Promise có 3 trạng thái: Pending, Fulfilled, Rejected
promise
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(resolve("Promise chain"), 3000);
        });
    })
    .then(function (res) {
        // then được gọi khi resolve() được gọi
        console.log("Successfully");
        console.log(res);
    })
    .catch(function (err) {
        // catch được gọi khi reject() được gọi
        console.log("Failure");
        console.log(err);
    })
    .finally(function () {
        // finally được gọi khi 1 trong 2 kia được gọi
        console.log("Done");
    });
/*
promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        // data nhận 1 ở trên
        console.log(data)
        return 2;
    })
    .then(function(data) {
        // data nhận 2 ở trên
        console.log(data)
    })
*/
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return new Promise((resolve, reject) => {
            reject("Co loi ne` cu");
        });
    })
    .then(() => {
        console.log(3);
        return sleep(1000);
    })
    .catch((err) => {
        console.log(err);
    });

// === Promise Method ===

// 1. Promise.resolve
// 1. Promise.reject
// 1. Promise.all

// Thư viện: output luôn luôn là một promise

let promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
    reject("Error!");
});
promise1.then((res) => console.log(res)).catch((err) => console.log(err));
let promise2 = Promise.resolve("Success!");
promise2
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((err) => {
        console.log("Err: ", err);
    });

var promise3 = new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.open("GET", "http://api.icndb.com/jokes/random");
    request.onload = function () {
        if (request.status == 200) {
            resolve(request.response); // we got data here, so resolve the Promise
        } else {
            reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
    };

    request.onerror = function () {
        reject(Error("Error fetching data.")); // error occurred, reject the  Promise
    };

    request.send(); //send the request
});

console.log("Asynchronous request made.");

promise3.then(
    function (data) {
        console.log("Got data! Promise fulfilled.");
        document.getElementsByTagName("body")[0].textContent =
            JSON.parse(data).value.joke;
    },
    function (error) {
        console.log("Promise rejected.");
        console.log(error.message);
    }
);
