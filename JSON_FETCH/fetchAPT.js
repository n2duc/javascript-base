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
        // document.getElementById('comment-box').innerHTML = htmls.join('')
    })
    .catch(err => console.log(err))

// Making fakeAPI with json-server package
const courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Manage Courses Fucking System =)))

function start() {
    getCourses(renderCourses)
    handleCreateForm()
}
start();

function getCourses(callback) {
    fetch(courseApi)
        .then(res => res.json())
        .then(callback)
}
function createCourses(data, callback) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    fetch(courseApi, options)
        .then(res => res.json())
        .then(callback)
}

// handle update, cancel buttons
function handleDeleteCourse(idCourse) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }
    fetch(courseApi + '/' + idCourse, options)
        .then(res => res.json())
        .then(() => {
            let courseItem = document.querySelector(`.course-${idCourse}`)
            if (courseItem) {
                courseItem.remove()
            }
        })
}
function handleUpdateForm(idCourse) {
    let nameInput = document.querySelector('.name')
    let descriptionInput = document.querySelector('.description')
    let handleBtn = `
        <button class="handle-button" id="update-btn">Update</button>
        <button class="handle-button" id="cancel-btn">Cancle</button>
    `
    let doubleBtn = document.querySelectorAll('.handle-button')
    doubleBtn.forEach(btn => btn.remove())
    document.getElementById('create-btn').insertAdjacentHTML('afterend', handleBtn)
    
    let updateBtn = document.getElementById('update-btn')
    let cancelBtn = document.getElementById('cancel-btn')
    updateBtn.onclick = () => {
        let formData = {
            name: nameInput.value,
            description: descriptionInput.value
        }
        handleUpdateCourse(idCourse, formData, () => {
            getCourses(renderCourses)
            nameInput.value = ''
            descriptionInput.value = ''
            doubleBtn.forEach((btn) => btn.remove())
        })
    }
    cancelBtn.onclick = () => {
        nameInput.value = ''
        descriptionInput.value = ''
        updateBtn.style.display = 'none'
        cancelBtn.style.display = 'none'
    }
    fetch(courseApi + '/' + idCourse)
        .then(res => res.json())
        .then(course => {
            nameInput.value = course.name
            descriptionInput.value = course.description
        })
}
function handleUpdateCourse(idCourse, data, callback) {
    let options = {
        method: 'PUT',
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + "/" + idCourse, options)
        .then(res => res.json())
        .then(callback)
}

function renderCourses(courses) {
    let listCourses = document.getElementById('list-courses')
    let html = courses.map((course) => {
        return `<li class="course course-${course.id}">
            <h4 class="author">${course.name}</h4>
            <p class="decs">${course.description}</p>
            <button class="btn" onclick="handleDeleteCourse(${course.id})">Delete</button>
            <button class="btn" onclick="handleUpdateForm(${course.id})">Update</button>
        </li>`
    })
    listCourses.innerHTML = html.join('')
}
function handleCreateForm() {
    let createBtn = document.getElementById('create-btn')
    createBtn.onclick = function() {
        let name = document.querySelector('.name').value
        let description = document.querySelector('.description').value
        let formData = {
            name: name,
            description: description
        }

        createCourses(formData, function() {
            getCourses(renderCourses)
        })
    }
}