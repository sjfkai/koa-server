# koa-server


## 启动

需要安装[nvm](https://github.com/creationix/nvm)

```
# 切换node版本
nvm use
# 更新配置，同步数据库结构
npm run update-env
# 启动
npm start
# 或
pm2 start ecosystem.config.js
```


## 单元测试

需要对 
* `src/common` 
* `src/controllers` 
* `src/middlewares` 
* `src/services` 

下的代码进行单元测试。

用到的第三方测试工具：

* 测试框架[ava](https://github.com/avajs/ava)

* 断言库[chai](http://chaijs.com/api/bdd/)  (建议使用BDD风格)

* 覆盖率[nyc](https://github.com/istanbuljs/nyc)


## 文档

使用 [gitbook](https://github.com/GitbookIO/gitbook)， 用法详见[文档](https://toolchain.gitbook.com/)。


* 文档目录： `./docs`

* 文档要求： 请见[文档概述](/docs/README.md)

* 启动文档服务： `npm run serve-doc`


## 目录结构

```
.
├── .eslintcache
├── .eslintrc.js                             // eslint 规则
├── .gitignore
├── .npmrc                                   // 设置npm代理
├── .nvmrc                                   // node版本
├── README.md
├── bin/                                     // 可执行脚本
├── config.local.js
├── coverage/                                // 覆盖率测试结果
├── index.js                                 // 入口
├── docs/                                    // 文档
│   └── _book/                               // 文档build生成的静态文件
├── package-lock.json
├── package.json
├── src
│   ├── common/
│   ├── config/                               // 配置
│   │   ├── config.json                       // 从配置服务拉去的配置（自动生成）
│   │   ├── consul-config.example.js          // 配置服务的配置示例
│   │   └── consul-config.js                  // 配置服务的配置
│   ├── controllers/                          // controller 处理请求
│   ├── middlewares/                          // 自定义中间件
│   ├── routes/                               // router 分发请求
│   ├── schemas/                              // 数据库结构（自动生成）
│   └── services/                             // service controller间可共用的逻辑
└── test/                                     // 单元测试
```
