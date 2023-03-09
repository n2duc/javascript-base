//Filter
const Cars = [{
        name: 'Mec',
        Price: 100,
        Country: 'Germany'
    },
    {
        name: 'Honda',
        Price: 150,
        Country: 'Japan'
    },
    {
        name: 'VinFast',
        Price: 100,
        Country: 'VietNam'
    },
    {
        name: 'Yamaha',
        Price: 200,
        Country: 'China'
    }
]
// Filter tra ve nhung object dung voi dieu kien 
const carList = Cars.filter((car, index) => {
    return car.Price === 100 && car.name === 'VinFast'
})
// console.log(carList)

//Return all Prime Numbers in the arrays
const number = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,17,19]
function isPrime(number) {
    if (number < 2) return false
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
// console.log(number.filter(isPrime))

// some() and every()
// some(): tra ve true neu co IT NHAT 1 thanh phan thoa man dieu kien
// every(): tra ve true neu TAT CA thanh phan thoa man dieu kien

const months = [
    { name: 'January', days: [30, 31] },
    { name: 'February', days: [29] },
    { name: 'March', days: [30, 31] },
    { name: 'April', days: [30] }
]
const fillterMonth = months.filter(m => {
    // return m.days.some(day => {
    //     return day === 31
    // })
    return m.days.every(day => {
        return day === 30
    })
})
// console.log(fillterMonth)

//Find()
//Tra ve object dau tien thoa man dieu kien
const findCar = Cars.find(car => {
    return car.Price === 100
})
// console.log(findCar)

// map => duyệt mảng -> thêm, sửa mảng (Tao ra mot Array moi)
const addCar = Cars.map((car, index) => {
    return {
        name: car.name,
        Price: `${car.Price} Coin`,
        Country: car.Country,
        Home: `${car.name} - ${car.Country}`,
        index: index
    }
})
// console.log(addCar)


//reduce() truyen vao 2 tham so accumulator(gia tri tich luy) and currentValue
//reduce duyet xong no se gan curr vao acc
const customCars = Cars.reduce((acc, curr) => {
    return {...acc, [curr.Price]: curr}
}, {})
const arrayCars = Object.values(customCars).reduce((acc, curr) => {
    return [...acc, curr]
}, [])
// console.log(customCars)
// console.log(arrayCars)

const resultPrice = Cars.reduce(function(result, car) {
    return result + car.Price;
}, 0);
// console.log(`Tong Price: ${resultPrice}`)

//Lam phang mang - Flat
const depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
const flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])
// console.log(flatArray)

//Noi object
const Vehicle = [
    {
        Loai: "Co gioi",
        courses: [{
                name: 'Honda',
                Price: 150,
                Country: 'Japan'
            },
            {
                name: 'Yamaha',
                Price: 200,
                Country: 'China'
            }
        ]
    },
    {
        Loai: "Xe lon",
        courses: [{
                name: 'VinFast',
                Price: 100,
                Country: 'VietNam'
            },
            {
                name: 'Mec',
                Price: 100,
                Country: 'Germany'
            }
        ]
    }
]

const vehicleList = Vehicle.reduce(function(courses, list) {
    return courses.concat(list.courses)
}, [])
console.log(vehicleList)

const htmls = vehicleList.map((course) => { //Duyet mang ra the html
    return `
            <div>
                <h2>${course.name}</h2>
                <p>${course.Price}</p>
                <p>${course.Country}</p>
            </div>`
})
const box = document.querySelector('.box')
box.innerHTML = htmls.join('')
console.log(htmls.join(''))