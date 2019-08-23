<template>

    <button class="x-button" :class="{[`icon-${iconPosition}`]:true}">
        <x-icon v-if="icon" :name="icon"></x-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>


</template>

<script>
    export default {
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .x-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radiuse);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items: center;
    }
    .x-button:hover{
        border-color: var(--bor-color-hover);
    }
    .x-button:active{
        background-color: var(--button-active-bg);
    }
    .x-button:focus{
        outline: none;
    }
    .content{
        order: 2;
    }
    .icon{
        order: 1;
        margin-right:.3em;
    }

    .icon-right .content{
        order: 1;
    }
    .icon-right .icon{
        order: 2;
        margin-right: 0px;
        margin-left: .3em;
    }
</style>