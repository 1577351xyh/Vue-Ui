# 一个Vue ui 组件

[![Build Status](https://www.travis-ci.org/1577351xyh/Vue-Ui.svg?branch=master)](https://www.travis-ci.org/1577351xyh/Vue-Ui)

# 介绍
这是一个在学习Vue过程中自己做的一个UI框架,希望对自己有用

## 开始使用
1.添加样式
使用本框架前,请在css中开启 border-box
```
*{box-sizing:border-box}
```
ie8以上浏览器都支持此样式


还需要设置默认颜色等变量
```
   html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radiuse: 4px;                  
            --color: #333;
            --border-color: #999;
            --bor-color-hover: #666;
        }
```

2.安装ui
```
npm i --save test-2019-8-26
```

3.引入
````angularjs
import {Button} from 'test-2019-8-26'
import 'test-2019-8-26/dist/index.css'
export default {
  name: 'app',
  components: {
    'x-button':Button
  }
}
````


##文档

##提问

##变更记录

##

