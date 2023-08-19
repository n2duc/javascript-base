// 1. Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([]) ➞ 0
function countTrue(params) {
    let count = 0;
    if (!params.length) return count;
    params.forEach(element => {
        if (element) count++;
    });
    return count;
}
console.log(countTrue([]));