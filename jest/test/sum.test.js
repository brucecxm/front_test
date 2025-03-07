// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



console.log("-------------------------------------------");
/* 5.1 断言（Assertions）
Jest 提供了丰富的断言方法，例如：

toBe()：判断是否严格相等。
toEqual()：判断对象或数组的值是否相等。
toBeNull()：判断是否为 null。
toBeDefined()：判断是否已定义。
toBeTruthy() / toBeFalsy()：判断值是否为真或假。 */
test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('null value', () => {
  const value = null;
  expect(value).toBeNull();
});
console.log("-------------------------------------------");
/* 5.2 异步测试
Jest 支持异步代码的测试。
可以使用 async/await 或回调函数（例如 done）来处理异步操作。 */

// 这里我们假设 fetchData 是一个异步函数
async function fetchData() {
  return 'some data'; // 模拟返回值
}


test('async test example', async () => {
  const data = await fetchData(); // 假设 fetchData 是一个异步函数
  expect(data).toBe('some data');
});

jest.setTimeout(100000); // 设置测试超时时间为 10 秒
test('fetches data', (done) => {
  fetchData((data) => {
    expect(data).toBe('some data');
    done();
  });
});
console.log("-------------------------------------------");
// Jest 提供了模拟功能，可以模拟函数、模块或定时器等。
/* 在测试中，我们常常需要模拟一些函数的行为，
尤其是那些外部依赖的函数（例如网络请求、数据库操作等）。
这样可以避免实际调用外部资源，确保测试集中于核心功能的验证。 */
// 模拟函数：
test('mock function', () => {
  const mockFn = jest.fn();
  mockFn('Hello');
  expect(mockFn).toHaveBeenCalledWith('Hello');
});
// 模拟模块：
/* 除了模拟单个函数，我们还可以模拟整个模块。
在测试中，有时我们需要模拟某个模块的行为
尤其是那些涉及外部资源（如 API 请求、文件操作等）的模块。 */
jest.mock('./someModule'); // 模拟模块
const someModule = require('./someModule');
console.log("-------------------------------------------");
// 5.4 测试覆盖率
// Jest 提供了生成测试覆盖率报告的功能。你可以使用--coverage 标志来运行测试并生成覆盖率报告：
// npm test -- --coverage
