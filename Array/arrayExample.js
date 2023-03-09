const array = 'Xin 5 chao tat ca 12 nguoi 4 hello 2'
const temp = []
array.split(' ').forEach(x => {
    if(Number(x)) {
        temp.push(Number(x))
    }
})
// console.log(temp)
const total = temp.reduce((x, y) => {
    return x + y
}, 0)
// console.log(total)

const yourName = 'nguyen ngoc duc'
const UpcFirst = (x) => {
    //Tạo thành mảng mới với chữ cái đều viết thường
    let convertToArray = x.toLowerCase().split(' ')
    //hàm map() duyệt qua từng phần từ trong mảng
    let result = convertToArray.map(x => {
        //replace() thay thế chữ cái đầu tiên thành chữ cái viết hoa của từng phần tử
        return x.replace(x.charAt(0), x.charAt(0).toUpperCase())
    })
    //join(' ') nối mảng thành chuỗi
    return result.join(' ')
}
console.log(UpcFirst(yourName));


//Xóa -2 thành 
let str = "SHELF-2-1-1-2-1";
//Tham số của split() là dấu phân cách (xác định phân cách giữa các phần tử)
//Tham số thứ 2 của split() là giới hạn chuỗi con trả về
let res = str.split('-2').join('')
console.log(res);

const numberList = [1,2,3,4,5,6,7]
// splice() trả về mảng đã bị xóa
// console.log(numberList.splice(2, 3));
// console.log(numberList)
// slice() trả về mảng
console.log(numberList.slice(1, 3))

const Person = {
    name: 'Duc',
    age: 20,
    girlFriend: true
}
console.log(Person.name.replace());