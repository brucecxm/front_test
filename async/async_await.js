/* async/await 是基于 Promise 的语法糖，简化了异步代码的书写，尤其是在处理多个异步操作时，使代码更加简洁和可读。

async：表示一个函数是异步的，函数内可能会有异步操作，返回值是一个 Promise。
await：只能在 async 函数内使用，等待 Promise 完成并返回结果。 */


async function fetchData() {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据请求成功'), 2000);
  });
  console.log(result);  // "数据请求成功"
}

fetchData();
/* 
异常处理：
使用 try/catch 来捕获异步操作中的错误。 */

async function fetchData() {
  try {
    let result = await new Promise((resolve, reject) => {
      let success = false;
      if (success) {
        resolve('操作成功');
      } else {
        reject('操作失败');
      }
    });
    console.log(result);
  } catch (error) {
    console.error(error);  // "操作失败"
  }
}

fetchData();
