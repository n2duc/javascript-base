{
  /**
   * 1 + "1" + 5 + 7 -> "11" + 5 + 7 -> "115" + 7 -> "1157"
   * null + undefined -> 0 + NaN -> NaN
   * null + '' + false + 1 -> "null" + false -> "nullfalse"
   * false + true -> 0 + 1 -> 1
   * 'true' + false -> "truefalse"
   * !!'0' + Boolean('1') -> true + true -> 2
   * !'false' + 9 -> 0 + 9 -> 9
   * 'js' + +'59' -> "js59"
   * 'evondev' + -'frontend' -> 'evondevNaN'
   * !!'false' == !!'0' -> true == true -> true
   * !!'true' === true -> true === true -> true
   * true == 'true' -> 1 == NaN -> false
   * 'false' == 'false' -> true
   */
}
