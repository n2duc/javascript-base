const addTwoPromises = async function(promise1, promise2) {
    // Using Promise.all
    // return Promise.all([promise1, promise2]).then(([result1, result2]) => {
    //     return result1 + result2;
    // })
    // Short
    const [result1, result2] = await Promise.all([promise1, promise2])
    return result1 + result2;
};
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2)
    .then(sum => console.log(sum))
    .catch(err => console.log(err)) 