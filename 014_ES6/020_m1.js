/*
 * @Author: Julian Huang 
 * @Date: 2023-01-26 12:52:29 
 * @Last Modified by: Julian Huang
 * @Last Modified time: 2023-01-26 13:48:29
 */

const odiv = document.querySelector('div');
console.log(odiv);


function fn1() {
  console.log('fn1 come from m1');
  privateFn();
  return 1;
}

function fn2() {
  //console.log('fn2');
  console.log('fn2 come from m1');

  return 2;

}

function privateFn() {
  // console.log('I do not want to be found');

}

// export default fn1;
const obj = { fn1, fn2 }
// export default obj;

//没有default就名字严格一致性
export { fn1, fn2 }