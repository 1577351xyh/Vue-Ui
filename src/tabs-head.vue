<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head",
        inject:['eventBus'],
        data(){
            return{

            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(item,vm)=>{
                let {width,height,top,left} = vm.$el.getBoundingClientRect();
                console.log(left)
                this.$refs.line.style.width=`${width}px`;
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $height:40px;
.tabs-header{
    display: flex;
    min-height: $height;
    justify-content: flex-start;
    align-items: center;
    position:relative;
    .line{
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid blue;
        transition: all 500ms;
    }
    .actions-wrapper{
        margin-left: auto;
    }
}
</style>
