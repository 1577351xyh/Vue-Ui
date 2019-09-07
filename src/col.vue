<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .col{
        height: 50px;
        width: 50%;
        background-color: #ccc;
        border: 1px solid red;
        $class:col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
            width: ($n/24)*100%;
        }
        }
    }
</style>
