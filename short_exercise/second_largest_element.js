const findMaxSecond = (array) => {
    let max_1st = array[0];
    let max_2nd = 0;
    let arraySize = array.length;
    if (arraySize < 2) {
        return -1;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max_1st) {
            max_2nd = max_1st;
            max_1st = array[i];
        } else if (array[i] !== max_1st && array[i] > max_2nd) {
            max_2nd = array[i];
        }
    }
    return max_2nd;
}
const demoArray = [12, 35, 1, 10, 34, 1];
console.log(findMaxSecond(demoArray));