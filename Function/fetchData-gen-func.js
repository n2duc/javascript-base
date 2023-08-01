function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    resolve(res.json());
                } else {
                    reject(new Error("Unable to fetch data"));
                }
            })
            .catch(err => reject(err));
    });
}

function* getUserData() {
    try {
        const user = yield fetchData("https://jsonplaceholder.typicode.com/users");
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
const generator = getUserData();
const promise = generator.next().value;
const user = promise
    .then(result => generator.next(result))
    .catch(error => generator.throw(error))
console.log(user)