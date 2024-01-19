function containsNearbyDuplicate (nums, k) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (numIndices[num] !== undefined && Math.abs(i - numIndices[num]) <= k) {
            return true;
        }
        numIndices[num] = i;
    }
    return false;
}
const arrayTest = [1,2,3,1];
console.log(containsNearbyDuplicate(arrayTest, 3));