let postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(res => res.json())
    .then((res) => {
        let htmls = res.map(post => {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        document.getElementById('comment-box').innerHTML = htmls.join('')
    })
    .catch(err => console.log(err))

// Making fakeAPI with json-server package
let courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))