/*
let users = [
    {
        id: 1,
        name: 'Ngoc Duc'
    },
    {
        id: 2,
        name: 'Van Quen'
    },
    {
        id: 3,
        name: 'Thi Tung'
    }
]
let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Dit moa may nha'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Co cai dau buoi'
    }
]
// 1. Lấy comments
// 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        let result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        resolve(result)
    })
} {

}
getComments()
    .then((comments) => {
        let userIds = comments.map((comment) => {
            return comment.user_id
        })
        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        let commentBox = document.getElementById('comment-box')
        let cmt = ''
        data.comments.forEach((comment) => {
            let user = data.users.find((user) => {
                return user.id === comment.user_id
            })
            cmt += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBox.innerHTML = cmt
    })
*/

setTimeout(() => {
    speak("Em oi, vu em to qua cho anh lam quen voi");
}, 2000);
console.log("Deo anh oi, lon em tham");
function speak(mes) {
    console.log(mes);
}
setTimeout(() => {
    console.log("Hup, anh hup het");
}, 0);
console.log("Dau quy bao");


var myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Hello World"), 3000);
    // reject(x);
});
myPromise
    .then(function(value) {
        setTimeout(() => console.log(value), 3100);
        return "Chao The Gioi";
    })
    .then(function(value) {
        setTimeout(() => console.log(value), 3200);
        return "こんにちは世界";
    })
    .then(function(value) {
        setTimeout(() => console.log(value), 3300);
        return "Привет, мир";
    });
setTimeout(() => console.log("Bonjour le monde"), 3000);