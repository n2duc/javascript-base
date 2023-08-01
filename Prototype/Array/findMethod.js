Array.prototype.findMethod = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

const userName = ["Willis", "Klein", "Walsh", "May"];
console.log(userName.findMethod((e) => e.startsWith("M")))