<template>
    <div class="toast" ref="wrapper">
<!--        <slot></slot>-->
        <div v-html="$slots.default[0]" class="text"></div>
        <div class="line" ref="line"></div>
        <div v-if="closeButton" @click="onClickClose" class="close">{{closeButton.text}}</div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return{
                        text:'关闭',
                        callback:undefined
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(()=>{
                console.log(this.$refs.wrapper.getBoundingClientRect());
                this.$refs.line.style.height=
                    `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        methods:{
            close(){
                this.$el.remove();
                this.$destroy()
            },
            onClickClose(){
                this.close();
                //如果传过来有button并且是一个函数
                if(this.closeButton && typeof this.closeButton==='function'){
                    this.closeButton.callback();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast {
        font-size:$font-size;
        line-height: 1.8;
        min-height:$toast-min-height;
        background-color:$toast-bg;
        color: #fff;
        align-items: center;
        display: flex;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
    }
    .line{
        margin:0 16px;
        width: 1px;
        background-color: #666666;
        height: 100%;
    }
    .close{
        padding-left: 8px;
        flex-shrink: 0;
    }
    .text{
        margin: 8px 0;
        max-width: 200px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }


</style>

