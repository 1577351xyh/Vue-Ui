---
title: 快速上手
---

# 快速上手


请参考 [安装](../install/) 章节

## Hello World

```javascript
import { Button } from 'xu-ui-test'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button': Button
  }
})
//使用xu-ui时，您需要使用border-box盒模型，否则会影响样式。CSS代码示例
//css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
