// 1. Write function to check if number is even, fn(2) -> true, fn(3) -> false
function isEvenNumber(num) {
  if (typeof num !== "number" || num === 0 || num % 2 !== 0) return false;
  return true;
}
// 2. Write function to convert string to prefix string, example: fn('i love to learn javascript', '_') -> i_love_to_learn_javascript
function toPrefixStr(str, prefix) {
  if (!str || str.length === 0 || typeof str !== "string") return "";
  return str.split(" ").join(prefix);
}
// 3. Write function to calculate age, example: fn(1994) -> 29
function calcAge(dateOfBirth) {
  // const currentYear = new Date().getFullYear();
  const currentYear = 2023;
  if (
    !dateOfBirth ||
    typeof dateOfBirth !== "number" ||
    dateOfBirth < 0 ||
    dateOfBirth > currentYear
  )
    return -1;
  return currentYear - dateOfBirth;
}
// new Date().getFullYear() -> 2023
// 4. Write any function using closure
function getFullName() {
  const fullname = "evondev";
  function getSomething() {
    const str = fullname + " developer";
  }
  return getSomething;
}
// 5. Write function sum of three numbers, fn(a,b,c)
function sum(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    return 0;
  return a + b + c;
}
// 6. Write function to get random number from 0 to 1000, example: fn() -> 321
function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}
// 7. Write function to truncate a string, example: fn(str, limit, prefix) -> fn('evondev', 2, '...') -> ev...
function truncateStr(str = "", limit = 20, prefix = "...") {
  if (str.length <= 0) return "";
  return str.slice(0, limit) + prefix;
}
// 8. Write function return typeof value, fn('evondev') -> string
function checkTypeOf(value) {
  return typeof value;
}
// 9. Write function to check if str includes word, fn("evondev", vonz) -> false
function isIncludeWord(str = "", word) {
  return str.includes(word);
}
