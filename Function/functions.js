//function to get the current date
function getCurrentDate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();

    return month + "/" + day + "/" + year;
}
console.log(getCurrentDate())