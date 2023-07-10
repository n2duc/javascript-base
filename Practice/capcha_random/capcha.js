const capcha = () => {
    let codes = []
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";

    for (let i = 0; i < 6; i++) {
        codes.push(str[Math.floor(Math.random() * str.length)])
    }
    return codes.join("");
}
console.log(capcha())