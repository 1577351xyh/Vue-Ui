<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-cascader :selected.sync="selected" itemheight="'40px'" :source="array">
  
    </g-cascader>
    {{selected}}
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import GCascaderItem from '../../../src/cascader/cascader-item'
import GCascader from '../../../src/cascader/cascader'

export default {
  components: {
    GCascaderItem,
    GCascader
  },
  data() {
    return {
      array: [
        {
          name: '汉洲',
          children: [{ name: '上城' }, { name: '上城2' }, { name: '上城3' }]
        },
        {
          name: '嘉兴',
          children: [{ name: '南湖' }, { name: '南湖1' }, { name: '南湖2' }]
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{ name: '台江' }, { name: '仓山' }]
            }
          ]
        }
      ],
      selected: [],
      content: `
       data: {
            selected: ['1']
          }
          <g-collapse :selected.sync="selected">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
