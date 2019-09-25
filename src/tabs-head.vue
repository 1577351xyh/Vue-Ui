<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        inject:['eventBus'],
        data(){
            return{

            }
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
    .actions-wrapper{
        margin-left: auto;
    }
}
</style>
