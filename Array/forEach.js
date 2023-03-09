//for Each
//1. Object prototype
//2. hasOwnProperty
//3. for in

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

//forEach chỉ duyệt qua các phần tử có trong mảng (không duyệt undefine - empty)
const courses = new Array(100)
courses.push('Javascript', 'ReactJS')

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})

let animals = ['dog', 'cat', 'elephant', 'lion', 'monkey']
animals.forEach((e) => {
    console.log(e)
})