const newPromise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

newPromise
    .then((message) => {
        console.log("This is in the then " + message);
    })
    .catch((message) => console.log("This is in the catch " + message));

const userLeft = false;
const userWatchingCatMeme = true;
function watchCallback(callback, errCallback) {
    if (userLeft) {
        errCallback({
            name: "User left",
            message: ":(",
        });
    } else if (userWatchingCatMeme) {
        errCallback({
            name: "User watching cat meme",
            message: "WebDevSimplified < Cat",
        });
    } else {
        callback("Thumbs up and Subscribe");
    }
}
// watchCallback(
//     (message) => {
//         console.log("Success: " + message);
//     },
//     (error) => console.log(error.name + " " + error.message)
// );

function watchCallPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: ":(",
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User watching cat meme",
                message: "WebDevSimplified < Cat",
            });
        } else {
            resolve({
                message: "Thumbs up and Subscribe",
                name: "Ngoc Duc",
            });
        }
    });
}
watchCallPromise()
    .then((message) => {
        return message.name;
    })
    .then((message) => console.log(message))
    .catch((error) => console.log(error.name + " " + error.message));

// Async Await
const main = async () => {
    try {
        const message = await watchCallPromise();
        console.log(message.name);
    } catch (error) {
        console.log(error.name + " " + error.message);
    }
}
main();

// Promise All
const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1");
});
const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2");
});
const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3");
});
Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages);
});
