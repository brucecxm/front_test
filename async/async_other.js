/* 5. 事件循环（Event Loop）
JavaScript 是单线程的，它执行一个任务队列中的任务。当遇到异步操作时，JavaScript 会将这些操作交给浏览器或 Node.js 处理（比如定时器、网络请求等），并继续执行后续代码。等到主线程空闲时，异步操作的回调函数才会被执行。

事件循环机制保证了 JavaScript 能在不阻塞 UI 的情况下进行异步操作。 */



/* 6. setTimeout / setInterval
setTimeout()：延迟执行指定的代码或函数。
setInterval()：重复执行指定的代码或函数，直到被清除。
 */

// setTimeout 示例
setTimeout(() => {
  console.log('延迟2秒执行');
}, 2000);

// setInterval 示例
let count = 0;
let interval = setInterval(() => {
  console.log('每秒执行一次');
  count++;
  if (count === 5) {
    clearInterval(interval);  // 5秒后停止执行
  }
}, 1000);
/* 7. 总结
回调函数：最早的异步方式，但容易产生回调地狱。
Promise：通过链式调用和状态管理解决回调地狱问题，提供更加灵活和清晰的异步控制。
async/await：基于 Promise，通过语法糖简化了异步代码的编写，使代码看起来像同步代码，易于理解和调试。
事件循环：是 JavaScript 异步操作的核心，理解事件循环有助于理解异步的执行顺序和时机。
掌握这些异步机制将帮助你写出更高效、更清晰的 JavaScript 代码。 */