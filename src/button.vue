<template>
    <button class="x-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <x-icon v-if="icon && !loading" class="icon" :name="icon"></x-icon>
        <x-icon class="icon loading" v-if="loading" name="loading"></x-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
            'x-icon':Icon
        },
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                //参数验证
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    /*loading动画*/
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .loading{
        animation: spin 2s infinite linear;
    }
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
        vertical-align: middle;
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
