// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
const chunk = (arr, size) => {
    let chunk = [];
    let index = 0;
    while (index < arr.length) {
        chunk.push(arr.slice(index, index + size));
        index += size;
    }
    return chunk;
}
console.log(chunk([1,2,3,4,5,6,7,8,9], 5));