<template>
    <div class="source-item">
      <div class="left">
          <div class="label" v-for="item in items" @click="leftSelected = item">
              {{item.name}}
              <icon name="right" class="icon" v-if="item.children"></icon>
          </div>
      </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems"></cascader-item>
        </div>
    </div>
</template>

<script>
    import  icon from './icon'
export default {
    name: "cascaderItem",
    props:{
        items:{
            type:Array
        }
    },
    data(){
        return{
            //左边被选中的状态
            leftSelected:null
        }
    },
    components:{
        icon
    },
    computed:{
        rightItems(){
            if(this.leftSelected&& this.leftSelected.children){
                return this.leftSelected.children
            }else {
                return null;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .source-item{
        display: flex;
        align-items: flex-start;
        height: 100%;
        box-shadow: 0px 0px 3px rgba(0,0,0,.2);

        .left{
            height: 100%;
            padding: .5em 1em;
        }
        .right{
           height: 100%;
            border-left: 1px solid #3333;;
         }
        .label{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
        }
        .icon{
            transform: scale(.7);
        }
    }


</style>
