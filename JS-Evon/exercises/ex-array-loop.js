// 1. Write a method that creates a new array with given values: input: (3, 'a') -> ['a','a','a']
function repeatValue(count, character) {
  return new Array(count).fill(character);
  // let results = [];
  // for (let i = 0; i < count; i++) {
  //   results.push(character);
  // }
  // return results;
}
// console.log(repeatValue(3, "a"));
// 2. Write a method that reverts input array: input: [1,2,3] -> results: [3,2,1]
function reverseArray(arr) {
  return arr.reverse();
}
// console.log(reverseArray([1, 2, 3]));
// 3. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null: input: [0, 1, false, 2, undefined, '', 3, null] => results: [1, 2, 3] built-in
function removeFalsy(arr) {
  return arr.filter((item) => Boolean(item));
}
console.log(removeFalsy([0, 1, false, 2, undefined, "", 3, null]));
// 4.Write a method that returns an array without listed values: without(array, value) -> without([1,2,3,1,5,7,1], 1) -> [2,3,5,7]
function without(arr, value) {
  return arr.filter((item) => item !== value);
}
console.log(without([1, 2, 3, 1, 5, 7, 1], 1));
// 5. Write a method that returns a duplicate-free array: input: [1, 2, 3, 1, 2] => results: [1, 2, 3]
function getUniqueValue(arr) {
  const results = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!results.includes(element)) results.push(element);
  }
  return results;
}
console.log(getUniqueValue([1, 2, 3, 1, 2]));
// 6. Write a method that splits an array into parts of determined size(chunk(array, size)): input: chunk([1, 2, 3, 4, 5], 2) => results: [[1, 2], [3, 4], [5]],
function chunkArr(arr, size) {
  const results = [];
  for (let index = 0; index < arr.length; index += size) {
    results.push(arr.slice(index, index + size));
  }
  return results;
}
console.log(chunkArr([1, 2, 3, 4, 5], 3));
// 7. Write a method that creates an array of unique values that are included in all given arrays: intersection(arr1, arr2) -> intersection([1, 2,5,7,9,3], [2, 3]) => [2]
function intersection(arr1, arr2) {
  const results = [];
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    if (arr1.includes(element)) results.push(element);
  }
  return results;
}
console.log(intersection([2, 3], [1, 2, 5, 7, 9, 3]));
// 8. Write a JS code to print Even numbers in given array: input [13,23,12,45,22,48,66,100] -> [12,22,48,66,100]
function evenNumbers(arr) {
  return arr.filter((n) => n % 2 === 0);
}
// 9. Write a JS code to delete all occurrence of element in given array: deleteElement([23,56,4,78,5,63,45,210,56], 56) -> results: [[23, 4, 78, 5, 63, 45, 210]]
// 10. Write a JS code to find the largest number in an array: input [2, 45, 3, 67, 34, 567, 34, 345, 123] -> result: 567
function largestNumber(arr) {
  let maxNumber = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > maxNumber) maxNumber = element;
  }
  return maxNumber;
}
console.log(largestNumber([2, 45, 3, 67, 34, 567, 34, 345, 123]));
// 11. Write a JS code to find duplicate values in a given array: input [4,2,34,4,1,12,1,4] -> results: [4, 1]
function findDuplicate(arr) {
  const results = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (
      arr.indexOf(element) !== arr.lastIndexOf(element) &&
      !results.includes(element)
    )
      results.push(element);
  }
  return results;
}
console.log(findDuplicate([4, 2, 34, 4, 1, 12, 1, 4]));
