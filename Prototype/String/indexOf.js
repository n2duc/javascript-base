String.prototype.myIndexOf = (searchString, fromIndex = 0) => {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, this.length + fromIndex)
    }
    const str = this.toString();
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + searchString.length) === searchString) {
            return i;
        }
    }
    return -1;
}