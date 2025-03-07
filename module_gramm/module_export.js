/* module.exports 是 Node.js 中用于导出模块的一个语法。
它允许你在一个文件中定义一些功能，
然后将这些功能导出，使得其他文件可以通过 require() 导入并使用这些功能。
这个概念在 Node.js 模块系统中非常重要。 */
/* 
1. 基础概念
模块（module）：Node.js 中的每个文件都是一个模块。
每个模块都有一个独立的作用域，可以包含变量、函数、类等。
module.exports：它是用来将模块的功能导出的对象。
其他文件可以通过 require() 来引入这个模块并使用导出的功能。 */

// 定义一个函数
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// 导出这些函数
module.exports = {
  add,
  subtract
};


// 一个文件只能有一个 module.exports。
// 一个文件只能有一个 module.exports。如果下面的写上了 就会报错
// 一个文件只能有一个 module.exports。


/* 3. 导出单个函数或类
如果你只想导出一个函数或类，可以将 module.exports 设置为该函数或类。

 */
// 定义一个函数
/* function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 导出 greet 函数
module.exports = greet;

 */



/* 

5. exports vs module.exports
Node.js 中，module.exports 是导出模块的主要对象，而 exports 是 module.exports 的一个快捷方式。
它们通常可以互换使用，但需要注意两者的细微差异：

module.exports 是真正的导出对象，最终你需要通过它来导出模块。
exports 是 module.exports 的一个快捷方式。如果你使用 exports 来添加属性，
实际上是修改 module.exports。 */

/* 错误用法（修改 exports 的整个引用）：
javascript
复制
编辑
exports = function() { // 这并不会改变 module.exports
  console.log('Hello World');
};
正确用法（修改 exports 的属性）：
javascript
复制
编辑
exports.greet = function() {
  console.log('Hello World');
}; */