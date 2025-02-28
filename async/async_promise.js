
/* 
3. Promise（承诺）
Promise 是解决回调地狱的一个更优雅的方式。它是一个表示异步操作的对象，代表了一个尚未完成但将来会完成的操作。
Promise 的状态：
Pending（等待中）：初始状态，操作尚未完成。
Fulfilled（已完成）：操作成功，返回一个结果。
Rejected（已拒绝）：操作失败，返回一个错误。
 */

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve('操作成功');//Fulfilled（已完成）：操作成功，返回一个结果。
  } else {
    reject('操作失败');//Rejected（已拒绝）：操作失败，返回一个错误。
  }
});

promise.then(result => {
  console.log(result);  // 输出 "操作成功"
}).catch(error => {
  console.log(error);  // 输出 "操作失败"
});

/* 如果 Promise 状态是 Fulfilled-->(resolve)，then() 会被触发，且 resolve 返回的结果会作为参数传递给 then() 的回调。
如果 Promise 状态是 Rejected-->(reject)，catch() 会被触发，且 reject 返回的错误信息会作为参数传递给 catch() 的回调。 */






// Promise 支持链式调用，可以将多个异步操作串联在一起，且每个操作都能独立处理自己的成功或失败。
// Promise 支持链式调用，可以将多个异步操作串联在一起，且每个操作都能独立处理自己的成功或失败。
// Promise 支持链式调用，可以将多个异步操作串联在一起，且每个操作都能独立处理自己的成功或失败。
let promise_one = new Promise((resolve, reject) => {
  resolve('操作成功');
});

promise_one
  .then(result => {
    console.log(result);  // 输出 "操作成功"
    return '下一步操作';
  })
  .then(nextResult => {
    console.log(nextResult);  // 输出 "下一步操作"
  })
  .catch(error => {
    console.log(error);
  });



/* 
  Promise.all 和 Promise.race：
  Promise.all()：接受一个包含多个 Promise 的数组，只有所有 Promise 都成功，then() 才会被调用。若有一个失败，catch() 会立刻触发。
  Promise.race()：接受一个包含多个 Promise 的数组，谁先完成，then() 就会执行哪个 Promise 的结果。 */
// Promise.all 示例
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(results => {
    console.log(results);  // [1, 2]
  })
  .catch(error => {
    console.error(error);
  });

// Promise.race 示例
Promise.race([new Promise(resolve => setTimeout(resolve, 2000, 'a')), new Promise(resolve => setTimeout(resolve, 1000, 'b'))])
  .then(result => {
    console.log(result);  // "b"
  });
