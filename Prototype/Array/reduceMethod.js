Array.prototype.reduceMethod = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}
const userName = ["Willis", "Klein", "Walsh", "May"];
const linkName = userName.reduceMethod((stringName, user) => {
    return stringName.concat(user, " ");
}, "");
console.log(linkName)