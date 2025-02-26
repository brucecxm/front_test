// math.js
// 命名导出（Named Export）
// 命名导出允许你导出多个变量、函数或类。通过这种方式，你可以在一个文件中定义多个内容，并根据需要导入它们。
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// 默认导出允许导出一个默认的对象、函数或类。每个模块只能有一个默认导出。如果使用默认导出，你可以在导入时自定义名称。
//一个文件只能导出一个默认的对象
const add = (a, b) => a + b;
export default add;
