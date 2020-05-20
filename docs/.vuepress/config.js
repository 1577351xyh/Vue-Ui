const path = require('path')
module.exports = {
  base: '/Vue-Ui/',
  title: 'Xu-Ui',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/1577351xyh/Vue-Ui ' },
      // {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/checkbox',
          '/components/option',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
          '/components/collapse',
          '/components/from',
          // '/components/cascader',
          '/components/nav',
          '/components/steps',
          '/components/page',
          '/components/table',
          '/components/scroll',

        ]
      },

    ],
  },

  scss: {
    includePaths: [path.join(__dirname, '../../styles.paletts.styl')]
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
}
