<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import GTabs from '../../../src/tabs/tabs'
import GTabsBody from '../../../src/tabs/tabs-body'
import GTabsHead from '../../../src/tabs/tabs-head'
import GTabsItem from '../../../src/tabs/tabs-item'
import GTabsPane from '../../../src/tabs/tabs-pane'

export default {
  components: { GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane },
  data() {
    return {
      selected: '1',
      content: `
          data:{
            selected: '1'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>
