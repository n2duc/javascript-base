// evondev -> e v o n d e v
// 1. for(initialize;condition;afterthought){statement}
{
  for (let index = 0; index < 10; index++) {
    console.log(`1. for: ${index}`);
  }
}
{
  let index = 0;
  for (; index < 10; index++) {
    console.log(`2. for: ${index}`);
  }
}
{
  let index = 0;
  for (; index < 2; ) {
    console.log(`3. for ${index}`);
    index++;
  }
}
{
  let index = 0;
  for (;;) {
    if (index > 2) break;
    console.log(`4. for ${index}`);
    index++;
  }
}
{
  const str = "evondev";
  let reverseStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const elm = str[index];
    reverseStr = reverseStr + elm;
  }
  console.log(reverseStr);

  const numbers = [1, 5, 9, 1000, 700];
  // [2,4,6,8,10]
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const elm = numbers[i] * 2;
    results.push(elm);
  }
  console.log(results);

  const sortedNumbers = [];
  let numbers2 = [1, 5, 9, 1000, 700];
  function sortedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        console.log(i, j);
        if (arr[j] < arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  console.log(`sorted numbers: ${sortedArray(numbers2)}`);
  /**console.log(i, j);
   * i = 0;
   * j = 1
   * j = 2
   * j = 3
   * j = 4
   * i = 1
   * j = 2
   * j = 3
   * j = 4
   * i = 2
   * j = 3
   * j = 4
   * i = 3
   * j = 4
   * i = 4
   *
   *
   */

  const evenNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
      break;
    }
    evenNumbers.push(numbers[index]);
  }
  console.log("evenNumbers:", evenNumbers);
}
{
  // for(variable of iterator): iterator: array, string, nodeList(DOM)
  const str = "I love to play Badminton";
  for (const word of str.split(" ")) {
    console.log("word:", word);
  }
  const numbers = [1, 2, 3, 4, 5];
  const results = [];
  for (const n of numbers) {
    results.push(n);
  }
  console.log(results);

  numbers.forEach((item) => {
    results.push(item);
  });
  console.log(results);
}
{
  // while(condition){statement}
  let count = 0;
  let str = "tran van van";
  let reverseStr = "";
  const splitStr = str.split(" ");
  let index = splitStr.length;
  while (index--) {
    // console.log(`count: ${count}`);
    // condition to stop loop
    reverseStr += splitStr[index] + " ";
  }
  console.log("reverseStr:", reverseStr);
}
{
  let count = 10;
  do {
    console.log(`count do while: ${count}`);
    count -= 3;
  } while (count > 11);
}
// {
//   for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
