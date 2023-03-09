//FILTER
//Duyet qua mang theo dieu kien -> tra ve tat ca phan tu trong mang 
//Các phần tử được trả về trong mảng mới
const cars = [{
        name: 'vinfast',
        price: 100
    },
    {
        name: 'mecedec',
        price: 140
    },
    {
        name: 'honda',
        price: 120
    }
]

const filterCar = cars.filter(function(car, index, array) {
    return car.price > 110
})
console.log(filterCar)


//Phương thức của Filter ^_^
Array.prototype.filter2 = function(callback) {
    const output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            const result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output;
}

const filterCar2 = cars.filter2(function(car, index, array) {
    return car.price > 110
})
console.log(filterCar2)

//SOME
//Kiểm trả tối thiểu có 1 phần tử trong mảng thỏa mãn điều kiện -  Trả về True/False

const lessons = [{
        name: 'java',
        isFinish: false,
    },
    {
        name: 'php',
        isFinish: true,
    },
    {
        name: 'python',
        isFinish: false,
    }
]

// const lessons = new Array(100) (không chạy qua phần tử trống - trả về false)
const result = lessons.some(function(lesson, index, array) {
    // console.log(lesson)
    return lesson.isFinish
})
console.log(result)

Array.prototype.some2 = function(callback) {
    var output = false
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}
const result2 = lessons.some2(function(lesson, index, array) {
    // console.log(lesson)
    return lesson.isFinish
})
console.log(result2)

//EVERY (ngược lại với SOME - duyệt qua mảng tất cả các phần tử, 1 phần tử sai 
// điều kiện thì trả về false)