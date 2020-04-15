# parcel-react
## 初始化项目

```shell
mkdir react-hooks
cd react-hooks
yarn init -y
yarn add react
yarn add react-dom
yarn add --dev parcel-bundler
```

## 新建相关目录和文件目录结构如下

```
├── package.json
├── src
│   ├── components // 组件目录
│   ├── index.html // 
│   ├── index.jsx  // 入口文件
│   ├── pages      // 页面
│   └── utils      // 工具
└── yarn.lock
```


## 配置package.json 启动脚本

 ```diff
+ "scripts": {
+		"start": "parcel src/index.html",
+   "prebuild": "rm -rf dist",
+   "build": "parcel build src/index.html --public-url ./"
+ },  
 ```

## 配置css-module

```shell
# 在 src 目录下新建 .postcssrc.js 文件,内容如下
module.exports = {
  modules: true,
  plugin: {
    autoprefixer: {},
  }
}
# 新增依赖
yarn add --dev postcss-modules autoprefixer
# 在 src 目录下新建 .babelrc.js 文件，内容如下
module.exports = {
  "presets": [
    "@babel/preset-env"
  ]
}
# 新增依赖
yarn add --dev @babel/preset-env
```

## 配置jest

新增依赖

```
yarn add --dev jest
```

在package.json中添加脚本

```json
"scripts": {
    "start": "parcel src/index.html",
    "prebuild": "rm -rf dist",
    "build": "parcel build src/index.html --public-url ./",
    "test": "jest"
 }
```

## # 配置eslint

新增依赖

```
yarn add --dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

初始化.eslintrc.js

```
yarn run eslint --init
```
配置eslint执行脚本

```json
# package.json
"scripts": {
  "start": "parcel src/index.html",
  "prebuild": "rm -rf dist",
  "build": "parcel build src/index.html --public-url ./",
  "test": "jest",
  "lint": "eslint --ext .js,.jsx src",
  "lint:fix": "eslint --fix src/**/*.{js,jsx}"
}
```

配置.eslintrc.js

```js
// 按需要配置eslint的规则
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    "ignorePatterns": ["dist/", "node_modules/", ".cache/", "src/assets/"],
    "rules": {
        // 语句尾需要分号
        semi: ["error", "always"],
    },

};
```

