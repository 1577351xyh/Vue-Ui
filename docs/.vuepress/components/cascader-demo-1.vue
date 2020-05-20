<template>
  <div style="padding-top: 16px;">
    <g-cascader :selected.sync="selected" itemheight="'40px'" :source="array">
    </g-cascader>
  </div>
</template>
<script>
import GCascaderItem from '../../../src/cascader/cascader-item'
import GCascader from '../../../src/cascader/cascader'

export default {
  components: {
    GCascaderItem,
    GCascader,
  },
  data() {
    return {
      selected: [],
      array: [
        {
          name: '汉洲',
          children: [{ name: '上城' }, { name: '上城2' }, { name: '上城3' }],
        },
        {
          name: '嘉兴',
          children: [{ name: '南湖' }, { name: '南湖1' }, { name: '南湖2' }],
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{ name: '台江' }, { name: '仓山' }],
            },
          ],
        },
      ],
    }
  },
}
</script>
