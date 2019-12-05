<template>
<div class="x-nav-item" :class="{'selected':selected}" @click="onClick">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "x-nav-item",
    inject:['root'],
    props:{
      name:{
          type:String,
          required:true
      }
    },
    created(){
      this.root.addItem(this)
    },
    data(){
        return{
            selected:false
        }
    },
    methods:{
        onClick(){

            this.root.namePath=[];
            // for (let i=0;i<this.$parent.$children.length;i++) {
            //     let vm = this.$parent.$children;
            //     if(vm[i].$options.name === 'sub-nav') {
            //         vm[i].open = false;
            //     }
            // }
            this.$parent.x && this.$parent.x();
            this.$emit('add:selected',this.name);
        },
    }
}
</script>

<style scoped lang="scss">
.x-nav-item{
    padding: 10px;
    position: relative;
}
    .selected::after{
        content: '';
        position: absolute;
        top: 100%;
        width: 100%;
        height: 2px;
        background-color: #4a90e2;
        left: 0;
        bottom: 0px;
    }
    .x-sub-nav .x-nav-item{
        font-size: 12px;
        color:#999999;
        &.selected{
             background-color: #cccccc;
         color:#666666;
            &::after{
                display: none;
             }
         }
    }
</style>
