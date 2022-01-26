## 可用脚本

在项目目录中，您可以运行：

### `yarn start`

以开发模式运行应用程序\
打开[http://localhost:3000](http://localhost:3000)在浏览器中查看。

当您进行更改时，页面将重新加载\
您还可以在控制台中看到任何lint错误。

### `yarn build`

将用于生产的应用程序生成到`build`文件夹\
它在生产模式下正确地运行，并优化构建以获得最佳性能。

请参阅关于[部署]的部分(https://facebook.github.io/create-react-app/docs/deployment)了解更多信息。
### `yarn build` fails to minify

本节已移至此处：[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 目录说明
```
react-cli-app
├─src
|  ├─common           // 项目材料
|  ├─components       // 页面公共组件
|  ├─hooks            // 页面公共hooks
|  ├─pages            // 页面相关代码
|  ├─routes           // 路由
|  ├─styles           // 公共样式
|  ├─test             // 测试方法
|  ├─utils            // 工具类
|  ├─utils            // 业务相关公共方法
```

### 工具库使用

1、请求库使用 [fly.js](https://github.com/wendux/fly)，useRequest使用参考[ahooks](https://ahooks.js.org/zh-CN/hooks/async/)

```
import fly from '@/common/service' 
import { useRequest } from '@/common/hooks'  // fly的hook实现 
```

2、日期格式处理使用 [dayjs](https://github.com/iamkun/dayjs)

3、常用 hooks 集合 [ahooks](https://ahooks.js.org/zh-CN/hooks/async)


### git提交规范

格式： type(scope?):`空格`subject

type说明：

1. build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
2. ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
3. docs：文档更新
4. feat：新增功能
5. merge：分支合并 Merge branch ? of ?
6. fix：bug 修复
7. perf：性能, 体验优化fix
8. refactor：重构代码(既没有新增功能，也没有修复 bug)
9. style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
10. test：新增测试用例或是更新现有测试
11. revert：回滚某个更早之前的提交
12. chore：不属于以上类型的其他类型


### 环境说明
开发环境 APP_DEV_URL_API
线上环境 APP_PROD_URL_API
index.html 中使用%APP_PROD_URL_API%
js/jsx 中：process.env.APP_PROD_URL_API

proxy
开发环境下跨域问题，前端一般是给本地的 devServer 设置代理