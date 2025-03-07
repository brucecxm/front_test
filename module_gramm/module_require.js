// 导入 math.js 模块
const math = require('./module_export');

// 使用导入的 add 函数
console.log(math.add(2, 3)); // 输出 5

// 使用导入的 subtract 函数
console.log(math.subtract(5, 2)); // 输出 3



// 一个文件只能有一个 module.exports。
// 一个文件只能有一个 module.exports。如果下面的写上了 就会报错
// 一个文件只能有一个 module.exports。



/* // 导入 greet 函数
const greet = require('./module_export');

// 使用 greet 函数
greet('Alice'); // 输出 "Hello, Alice!"
 */