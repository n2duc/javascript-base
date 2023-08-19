function getUniqueElement(array) {
    // return [...new Set(array)];
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArr.includes(array[i])) uniqueArr.push(array[i]);
    }
    return uniqueArr;
}
console.log(getUniqueElement([1,2,2,4,5,4,6]));