// 1. Viết hàm truyền vào 1 string, các chuỗi cách nhau bằng dấu , ( "Nguyen, Ngoc, Duc")
// 2. Yêu cầu hàm trả về: Random ký tự  trong chuỗi đó VD: "Ngoc"
function pickRandom(params) {
    if (!params.length) {
        console.log("Empty message");
    }
    const pickList = params.split(",").map(a => a.trim());
    const random = pickList[Math.floor(Math.random() * pickList.length)];
    return random;
}
console.log(pickRandom("an, ngu, hoc, choi, suc"));