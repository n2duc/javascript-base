// 1. Convert string to dash string
const str = "I love to learn Javascript";
// expected: "i-love-to-learn-javascript"
const strDash = str.toLowerCase().split(" ").join("-");
const strDash2 = str.toLowerCase().replaceAll(" ", "-");
// 2. Truncate string to 30 characters with ...
const longStr = `Write a JavaScript function to split a string and convert it into an array of words`;
const truncateStr = longStr.slice(0, 30) + "...";
// expected: Write a JavaScript function to ...
// 3.
const newStr = `javascript is awesome`;
const newStrResult = newStr.charAt(0).toUpperCase() + newStr.slice(1);
// expected: Javascript is awesome
// 4.
const lastStr = "evondev is awesome";
const reverseStr = lastStr.split(" ").reverse();
// expected: awesome is evondev
// 5. Explain these code with your experience with TDZ and hoisting
{
  let teacher = "evondev";
  const teacherLesson = function () {
    const teacher = "tran anh tuan";
    console.log(teacher);
  };
  teacherLesson();
  /**
   * let teacher
   * const teacherLesson
   * teacher = "evondev"
   * teacherLesson = function(){...}
   * teacherLesson()
   * TDZ
   * const teacher
   * TDZ
   * console.log(teacher)
   */
  console.log(mystudents); // undefined
  var mystudents = [];
  /**
   * TDZ start & end here
   * var mystudents; undefined
   * console.log(mystudents); -> undefined
   * mystudents = [];
   */
}
