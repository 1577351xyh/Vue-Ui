<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>基础布局</strong>
      <p>使用单一分栏创建基础的栅格布局</p>
    </p>
    <g-row class="demoRow">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import GRow from '../../../src/grid/row'
import GCol from '../../../src/grid/col'

export default {
  components: { GRow, GCol },
  data() {
    return {
      content: `
          .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

          <g-row class="demoRow">
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
              <div class="demoCol">8</div>
            </g-col>
          </g-row>

          <g-row class="demoRow">
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
              <div class="demoCol">6</div>
            </g-col>
          </g-row>

          <g-row class="demoRow">
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
              <div class="demoCol">4</div>
            </g-col>
          </g-row>

          <g-row class="demoRow">
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
              <div class="demoCol">2</div>
            </g-col>
          </g-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>
