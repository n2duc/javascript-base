Date.prototype.vnFormat = function() {
    let yyyy = this.getFullYear();
    let mm = this.getMonth() + 1;
    let dd = this.getDate();
    return dd + "/" + mm + "/" + yyyy;
}
let now = new Date();
let xms = new Date(2023, 7, 16);
console.log(now.vnFormat());
console.log(xms.vnFormat());