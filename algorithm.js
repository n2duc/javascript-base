//Fibonacci
function fibonacci(n) {
    const fi = [1, 1]
    for (var i = 2; i < n; i++) {
        fi[i] = fi[i - 2] + fi[i - 1]
    }
    return fi;
}
const result = fibonacci(10)
console.log(result)

//Roman to Integer
const romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let Integer = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(`Lay phan tu thu ${i} trong s`)
        const cur = roman[s[i]]
        console.log(cur)
        const next = roman[s[i + 1]]
        console.log(next)

        // cur < next ? Integer -= cur : Integer += cur;
        if (cur < next) {
            Integer -= cur
        } else {
            Integer += cur
        }
    }
    return Integer;
};

console.log(romanToInt('XILV'))

//Two Sum
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}
console.log(twoSum([1, 2, 3, 4, 5], 8))

//Adds Two Numbers
const addTwoNumber = function(l1, l2) {

}