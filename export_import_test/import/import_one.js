// 导入命名导出
import { add, subtract } from "../export/export_one.js";
console.log(add(1, 2)); // 3
console.log(subtract(5, 3)); // 2

//导入默认导出
import myAddFunction from "./math";
console.log(myAddFunction(1, 2)); // 3

//ps:vue里面非常喜欢用这两种格式 一般组件都用默认导出 把整个组件导出   api  store用命名导出 把单个api导出 方便选择
//ps:vue里面非常喜欢用这两种格式 一般组件都用默认导出 把整个组件导出   api  store用命名导出 把单个api导出 方便选择
//ps:vue里面非常喜欢用这两种格式 一般组件都用默认导出 把整个组件导出   api  store用命名导出 把单个api导出 方便选择
//ps:vue里面非常喜欢用这两种格式 一般组件都用默认导出 把整个组件导出   api  store用命名导出 把单个api导出 方便选择
