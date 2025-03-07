/* async/await 是基于 Promise 的语法糖，简化了异步代码的书写，尤其是在处理多个异步操作时，使代码更加简洁和可读。

async：表示一个函数是异步的，函数内可能会有异步操作，返回值是一个 Promise。
await：只能在 async 函数内使用，等待 Promise 完成并返回结果。 */


async function fetchData() {

  console.log('开始请求数据');

  let result = await new Promise((resolve, reject) => {
    /*     在resolve（）或者reject（）执行之前 Promise对象一直都是pending状态
        因此会在这里停止运行    
        直到setTimeout里面的回调函数执行后  才变为Fulfilled状态 */
    setTimeout(() => resolve('数据请求成功111'), 2000);
  });

  console.log(result);  // "数据请求成功"

  console.log('结束请求数据');
}

fetchData();


console.log('------');
















//
// /*
// 异常处理：
// 使用 try/catch 来捕获异步操作中的错误。 */
//
// async function fetchDataone() {
//   try {
//     let result = await new Promise((resolve, reject) => {
//
//       let success = false;
//       if (success) {
//         resolve('操作成功');
//       } else {
//         reject('操作失败');
//       }
//     });
//
//     console.log(result);
//   } catch (error) {
//     console.error(error);  // "操作失败"
//   }
// }
//
// fetchDataone();











/* 


await 使用规则：
跟随 Promise 对象：

当 await 跟随一个 Promise 对象时，await 会等待该 Promise 解析（resolve）或拒绝（reject），并返回该解析后的结果（如果 Promise 成功）或者抛出异常（如果 Promise 被拒绝）。
示例：

javascript
复制
编辑
async function example() {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => resolve('成功！'), 2000);
  });
  console.log(result);  // '成功！'
}
example();
跟随非 Promise 对象：

如果 await 后面跟的是一个普通的非 Promise 值（如数字、字符串、对象等），await 会自动将其转换为一个已经解决的 Promise。也就是说，await 会立即返回这个值，类似于 Promise.resolve(value)。
示例：

javascript
复制
编辑
async function example() {
  let result = await 5;  // 等同于 await Promise.resolve(5)
  console.log(result);  // 5
}
example();
 */