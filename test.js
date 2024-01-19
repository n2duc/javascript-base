function triangle(height) {
    for (let i = 1; i <= height; i++) {
        let stars = "*";
        let spaces = " ".repeat(height - i);
        if (i > 1 && i < height) {
            stars += " ".repeat(2 * i - 3) + "*"; // Add spaces and an asterisk in the middle
        } else if (i === height) {
            stars = "*".repeat(2 * i - 1); // Add asterisks for the bottom row
        }
        console.log(spaces + stars);
    }
}

function extract(n) {
    let sum = 0;
    while (n > 0) {
        let x = n % 10;
        sum += x;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}
// extract(342129);

function reverseArray(arr) {
    const length = arr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    console.log(arr);
}

const ArrayNumber = [4,2,7,1,3,9,8,5]
// reverseArray(ArrayNumber);

var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", "ts"));

function mergeSorted(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array nums1

    // While there are elements in both arrays
    while (i >= 0 && j >= 0) {
        // Compare the elements from both arrays and place the larger element at nums1[k]
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
mergeSorted(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
