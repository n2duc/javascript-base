{
  // assignment
  // global execution context
  let a = 3;
  function addTwo(x) {
    // addTwo execution context
    let ret = x + 2;
    return ret;
  }
  let b = addTwo(a);
  console.log(b); // 5
  /**
   * let a
   * let b
   * function addTwo(){}
   * a = 3;
   * b = addTwo(a); // tìm a trong global execution context -> tìm thấy a có giá trị là 3
   * b = addTwo(3); // gọi function addTwo(3)
   * x = 3
   * let ret
   * ret = 3 + 2
   * return 5
   *
   */
}
{
  let val1 = 2;
  function multiplyThis(n) {
    // local execution context
    let ret = n * val1;
    return ret;
  }
  let multiplied = multiplyThis(6);
  console.log("example of scope:", multiplied);
  /**
   * let val1
   * let multiplied
   * function multiplyThis(){}
   * val1 = 2
   * multiplied = multiplyThis(6)
   * n = 6
   * let ret
   * ret = n * val1
   * ret = 6 * val1
   * ret = 6 * 2
   * return 12
   */
}
{
  let val = 7;
  function createAdder() {
    // createAdder execution context
    function addNumbers(a, b) {
      // addNumbers execution context
      let ret = a + b;
      return ret;
    }
    return addNumbers;
  }
  let adder = createAdder(); // function adder(a, b) => a + b;
  let sum = adder(val, 8);
  console.log("example of function returning a function: ", sum);
  /**
   * let val
   * function createAdder(){}
   * let adder
   * let sum
   * val = 7
   * adder = createAdder();
   * function addNumber(a, b){...}
   * adder = function addNumbers(a, b){...}
   * sum = adder(val, 8)
   * sum = adder(7, 8)
   * let ret
   * ret = 7 + 8
   * return 15
   */
}
{
  function createCounter() {
    // createCounter execution context
    let counter = 0;
    const myFunction = function () {
      // myFunction execution context
      counter = counter + 1; // 1
      return counter;
    };
    return myFunction;
  }
  const increment = createCounter(); // myFunction(){...}
  const c1 = increment(); // 1
  const c2 = increment(); // 2
  const c3 = increment(); // 3
  console.log("example increment", c1, c2, c3); // 1 2 3
  /**
   * createCounter(){...}
   * const increment
   * increment = createCounter()
   * let counter
   * const myFunction
   * count = 0
   * myFunction = function(){...}
   * const c1
   * const c2
   * const c3
   * c1 = increment();
   *
   */
}
/**
 *
 * c3() -> xóa
 * c2() -> xóa
 * c1() -> xóa
 * createCounter() -> xóa khỏi callstack
 * globalExecutioContext -> xóa cuối cùng
 */
// function displayName() {
//   displayName();
// }
// displayName();
function fnA() {
  return 12;
}
function fnB() {
  fnA();
}
function fnC() {
  fnB();
}
function fnFinal() {
  fnC();
}
fnFinal();
/**
 *
 *
 * fnA() -> remove khỏi callstack
 * fnB() -> remove
 * fnC()-> remove
 * fnFinal() -> remove
 * global execution context -> remove
 */
