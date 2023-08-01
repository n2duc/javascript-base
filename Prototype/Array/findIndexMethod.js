Array.prototype.findIndexMethod = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}
const userName = ["Willis", "Klein", "Walsh", "May"];
console.log(userName.findIndexMethod((e) => e.startsWith("A")))