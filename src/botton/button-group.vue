<template>
<div class="g-button-group">
    <slot></slot>
</div>
</template>

<script>
export default {
    mounted(){
        for(let node of this.$el.children){
            let name = node.nodeName.toLowerCase()
            if(name !== 'button'){
                console.warn('g-button-group 的子元素应该全是x-button,但是你写了div')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.g-button-group{
    display: flex;
    vertical-align: middle;
}
.g-button-group > .x-button{
    border-radius: 0px;
}
.g-button-group > .x-button:not(first-child){
    margin-left: -1px;
}
.g-button-group :first-child{
    border-top-left-radius: var(--border-radiuse);
    border-bottom-left-radius: var(--border-radiuse);
}
.g-button-group :last-child{
    border-top-right-radius: var(--border-radiuse);
    border-bottom-right-radius: var(--border-radiuse);
}
.g-button-group :hover{
    position: relative;
    z-index: 1;
}
</style>
