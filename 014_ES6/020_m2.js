
function fn1() {
  console.log('I am from m2');

  return 3
}

// export default { fn1 };
// 如果这里直接导出函数，那么引用的那里就可以直接使用（）调用，如果导出的是对象，就要以obj.fn1()的形式调用
// export default fn1;