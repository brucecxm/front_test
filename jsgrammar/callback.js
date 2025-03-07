/* 示例1：最简单的回调函数
javascript
复制
编辑
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  var name = "Alice";
  callback(name);  // 调用传入的回调函数
}

processUserInput(greet);  // 将 greet 函数作为回调传递
解释：

greet 函数是一个回调函数，它接受 name 参数并打印问候语。
processUserInput 函数接受一个回调函数（callback）作为参数，并在函数内部执行它。这里，greet 被传递给 processUserInput 并在 processUserInput 内部被调用。

 */














console.log((() => {
  console.log("Hello, World!");
  return "Hello, World!";
})());
/*
**立即执行函数表达式**（IIFE，Immediately Invoked Function Expression）是指一个函数定义后立即执行。它的形式通常是在函数定义后加上一对圆括号，使其成为一个表达式，然后立即执行该函数。

### 语法：

```javascript
(function() {
  // 代码
})();
```

或者用箭头函数：

```javascript
(() => {
  // 代码
})();
```

### 工作原理：

1. **函数表达式**：`function(){...}` 本质上是一个函数声明。如果它直接写在代码中，通常会被认为是一个声明，而不是一个表达式。为了将其当做表达式来执行，我们把它放在一对圆括号中。这样它就变成了一个匿名函数表达式。
2. **立即执行**：圆括号后的 `()` 会触发这个函数的执行。

### 例子：

```javascript
(function() {
  console.log("Hello, World!");
})();
```

这段代码会定义一个匿名函数，并且立即执行它，输出：

```
Hello, World!
```

### 为什么使用 IIFE？

- **避免污染全局作用域**：通常，如果你在全局作用域中声明一个变量，它会污染全局作用域。使用 IIFE 可以确保变量只在函数内部有效。
- **创建局部作用域**：IIFE 创建了一个独立的作用域，它可以包含局部变量，避免与外部代码冲突。
- **模块化编程**：IIFE 允许你创建一个私有的作用域并返回需要的值，类似于创建模块的结构。

### 举个例子：避免污染全局作用域

```javascript
var a = 1; // 全局作用域中的变量

(function() {
  var b = 2; // b 仅在这个函数内部有效
  console.log(a); // 输出 1
  console.log(b); // 输出 2
})();

console.log(a); // 输出 1
console.log(b); // 报错: b is not defined
```

在上面的代码中，`b` 是在 IIFE 的作用域中定义的，它在 IIFE 外部不可访问，因此没有污染全局作用域。

### 总结：

IIFE 是一个非常有用的技术，尤其是在需要保护作用域、避免变量污染和实现模块化时。它允许我们在不污染全局作用域的情况下封装代码，并立即执行。

 */
//
// 这段代码的核心是 **立即执行函数表达式**（IIFE，Immediately Invoked Function Expression）。让我们一步步拆解：
//
// ```javascript
// console.log((() => {
//   console.log("Hello, World!");
//   return "Hello, World!";
// })());
// ```
//
// ### 1. **箭头函数 (`() => {}`)**
//
// 首先，你看到了一个箭头函数：
//
// ```javascript
// () => {
//   console.log("Hello, World!");
//   return "Hello, World!";
// }
// ```
//
// 这是一个没有参数的箭头函数，它做了两件事：
// - 打印 `"Hello, World!"` 到控制台。
// - 返回字符串 `"Hello, World!"`。
//
// ### 2. **立即执行函数表达式（IIFE）**
//
// 接着，这个箭头函数被包裹在一对圆括号 `()` 中：
//
// ```javascript
// (() => {
//   console.log("Hello, World!");
//   return "Hello, World!";
// })()
// ```
//
// 这段代码的关键部分是 `()`，它会立即调用括号内的函数。因此，这个箭头函数会被 **立即执行**。这种模式叫做 **立即执行函数表达式**（IIFE），目的是定义一个匿名函数并立即执行它。
//
// ### 3. **外部 `console.log`**
//
// 最后，外层的 `console.log()` 会打印出 IIFE 的返回值：
//
// ```javascript
// console.log((() => {
//   console.log("Hello, World!");
//   return "Hello, World!";
// })());
// ```
//
// 由于 IIFE 返回的是 `"Hello, World!"`，所以外部的 `console.log()` 会打印出这个值。
//
// ### 执行流程：
//
// 1. 内部的 `console.log("Hello, World!")` 首先被调用，输出 `Hello, World!` 到控制台。
// 2. 然后，IIFE 返回字符串 `"Hello, World!"`。
// 3. 外层的 `console.log()` 输出这个返回值，即 `"Hello, World!"`。
//
// ### 运行结果：
//
// ```text
// Hello, World!
// Hello, World!
// ```
//
// ### 总结：
//
// 这段代码首先调用了一个立即执行的箭头函数，它打印了 `"Hello, World!"`，然后返回 `"Hello, World!"`。外部的 `console.log` 再次打印出这个返回值。