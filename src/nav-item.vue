<template>
<div class="x-nav-item" :class="{'selected':selected}" @click="onClick">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "x-nav-item",
    props:{
      name:{
          type:String,
          required:true
      }
    },
    data(){
        return{
            selected:false
        }
    },
    methods:{
        onClick(){
            this.$emit('add:selected',this.name);
        }
    }
}
</script>

<style scoped lang="scss">
.x-nav-item{
    padding: 5px;
}
    .selected{
        background-color: red;
    }
</style>
