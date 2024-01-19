function squareSum(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
function isHappy(n) {
    let slowPointer = n;
    let fastPointer = squareSum(n);
    while (fastPointer !== 1 && fastPointer != slowPointer) {
        slowPointer = squareSum(slowPointer);
        fastPointer = squareSum(squareSum(fastPointer));
    }
    return fastPointer == 1;
}
console.log(isHappy(19));