<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <div v-if="closeButton" @click="onClickClose">{{closeButton.text}}</div>
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
                default: 10
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return{
                        text:'关闭',
                        callback(){
                            console.log('知道了')
                        }
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
        },
        methods:{
            close(){
                this.$el.remove();
                this.$destroy()
            },
            onClickClose(){
                this.close();
                this.closeButton.callback();
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast {
        font-size:$font-size;
        height:$toast-height;
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

</style>

