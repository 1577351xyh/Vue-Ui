<template>
  <div class="collapseItem">
    <div class="title" @click="change">
      {{ title }}
    </div>
    <transition name="fade">
      <div class="content" v-show="open" :class="{ open }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus &&
      this.eventBus.$on('update:selected', names => {
        console.log(names)
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
  },
  methods: {
    change() {
      if (this.open) {
        this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.collapseItem {
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  .title {
    height: 32px;
    padding-left: 8px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
  }
  &:first-child .title {
    border: 1px solid gray;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 32px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  &:last-child .title {
    margin-bottom: -1px;
  }
  .content {
    padding: 8px;
    font-size: 14px;
    border-bottom: 1px solid gray;
  }
  &:last-child .content {
    border-bottom: none;
  }
}

</style>
