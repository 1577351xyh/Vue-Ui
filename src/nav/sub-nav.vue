<template>
  <div class="x-sub-nav" :class="{ active }" v-click-outside="close">
    <span @click="onClick" class="laber">
      <slot name="title"></slot>
      <span class="x-icon-warper" :class="{ open }">
        <x-icon name="right"></x-icon>
      </span>
    </span>
    <div class="x-sub-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from './click-outside'
import XIcon from '../icon/icon'
export default {
  directives: { ClickOutside },
  name: 'sub-nav',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    }
  },
  components: {
    XIcon
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) > -1 ? true : false
    }
  },
  methods: {
    close() {
      this.open = false
    },
    onClick() {
      this.open = !this.open
    },
    x() {
      this.root.namePath.unshift(this.name)
      if (this.$parent.x) {
        this.$parent.x()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    width: 100%;
    height: 2px;
    background-color: #4a90e2;
    left: 0;
    bottom: 0px;
  }
  .x-sub-nav {
    &::after {
      display: none;
    }
  }
}
.x-sub-nav {
  position: relative;
  .laber {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .x-sub-popover {
    position: absolute;
    top: 100%;
    background-color: #fff;
    left: 0;
    margin-top: 4px;
    border-radius: 4px;
    box-shadow: 0 0 3px #dddddd;
    border: 1px solid #dddddd;
    white-space: nowrap;
    font-size: 12px;
    color: #999999;
    min-width: 8em;
  }
}
.x-sub-nav .x-sub-nav .x-sub-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}

.x-sub-nav .x-icon-warper {
  display: none;
}
.x-sub-popover .x-icon-warper {
  display: inline-flex;
  transition: all 0.5s;
}
.open {
  transform: rotate(180deg);
}
</style>
