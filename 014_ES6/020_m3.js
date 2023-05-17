/*
 * @Author: Julian Huang 
 * @Date: 2023-01-26 13:32:45 
 * @Last Modified by: Julian Huang
 * @Last Modified time: 2023-01-26 13:46:42
 */

import fn1 from "./020_m1.js";
import fn2 from "./020_m2.js";

function fn3() {
  console.log('I came from m3');
  fn1.fn2();
  fn1.fn1();
  fn2();
}

// export default fn3