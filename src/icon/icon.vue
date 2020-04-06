<template>
  <svg class="x-icon" @click="$emit('click',$event)">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  props: ['name']
}
</script>

<style scoped>
.x-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
