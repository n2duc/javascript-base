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