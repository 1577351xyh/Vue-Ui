<template>
    <div class="source-item">
      <div class="left">
          <div class="label" v-for="item in items" @click="onClickLabel(item)">
              {{item.name}}
              <icon name="right" class="icon" v-if="item.children"></icon>
          </div>
      </div>
        <div class="right" v-if="rightItems">
            <cascader-item :level="level+1"
                           :items="rightItems"
                           :selected="selected" @update:selected="onUpdateSelected"
            ></cascader-item>
        </div>

    </div>
</template>

<script>

    import  icon from '.././icon/icon'
export default {
    name: "cascaderItem",
    props:{
        items:{
            type:Array
        },
        selected:{
            type:Array,
            default:()=>{
                return []
            }
        },
        level:{
            type:Number,
            default:0
        }
    },
    methods:{
        onClickLabel(item){
            //vue不能直接对数组进行动态赋值,不能修改props中的数据
            //深拷贝
            let copy = JSON.parse(JSON.stringify(this.selected));
            //把当前选中的值拷贝一份通知外面
            copy[this.level] = item;
            //把数组后面的都删除
            copy.splice(this.level+1);
            this.$emit('update:selected',copy)

        },
        //level3更新
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    },
    components:{
        icon
    },
    computed:{
        rightItems(){
            let currentSelected = this.selected[this.level];
            // console.log(currentSelected);
            if(currentSelected && currentSelected.children){
                return currentSelected.children
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
            padding: 5px;
        }
        .icon{
            transform: scale(.7);
        }
    }


</style>
