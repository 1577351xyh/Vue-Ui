<template>

<div class="x-slide" @mouseenter="noPlay" @mouseleave="plays">


    <div class="x-slide-window">
        <div class="x-slide-warpper" ref="window">
            <slot></slot>
        </div>
    </div>


    <div class="slide-dots">
        <span @click="prev">
            <x-icon name="left"></x-icon>
        </span>
        <span v-for="n in arrLength" @click="selectedClick(n-1)"  class="slide-icon" :class="{'active':selectedIndex === n-1}">{{n-1}}</span>
        <span @click="next">
            <x-icon name="right"></x-icon>
        </span>
    </div>


</div>
</template>

<script>
    import XIcon from '.././icon/icon'
export default {
    name: "",
    components:{
        XIcon
    },
    props:{
        selected:{
            type:String
        },
        autoplay:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            arrLength:0,
            lastSelected:undefined,
            timeId:null,
        }
    },
    updated(){
        this.updateChildern();
    },
    mounted(){
        this.updateChildern();
        if(this.autoplay){
            this.playAutopaly();
        }
        this.arrLength = this.items.length;
        //上次被选中的值,记录下来
    },
    computed:{
      selectedIndex(){
         let index = this.names.indexOf(this.selected);
         return index ===-1 ? 0: index;
      },
      names(){
          return this.items.map(vm=>vm.name) || [];
      },
      items(){
          return this.$children.filter(vm=>vm.$options.name ==='slides')
      }
    },
    methods:{
        prev(){
            this.selectedClick(this.selectedIndex -1);
        },
        next(){
            this.selectedClick(this.selectedIndex +1);
        },
      //默认选中的是第一个selected
        updateChildern(){
            let selected = this.getSelected();
            //遍历所有的子元素,通知他们当前的selecte
            this.items.forEach((vm)=>{
                //通知子元素,告诉他们当前的index和下一个index
                //当前点击的是不是大于上一次点击的,如果是,就是正向
                // reverse是反向动画
                let reverse = this.selectedIndex  > this.lastSelected ? false : true;
                if(this.timeId){
                    if(this.lastSelected === this.items.length-1 && this.selectedIndex === 0 ){
                        reverse = false;
                    }
                    if(this.lastSelected === 0 && this.lastSelected ===this.items.length-1){
                        reverse = true;
                    }
                }
                vm.reverse = reverse;
                this.$nextTick(()=>{
                    //只要改了selecte就会做反向动画,做动画之前要确保,reverse已经生效在dom上了
                    vm.selected = selected;
                })
            });
        },
        //默认获取的selected
        getSelected(){
            let frist = this.items[0];
            return this.selected || frist.name;
        },
        selectedClick(index){
            //map返回一个新的数组(带name值的)
            //上次选中的值,selectedindex变化之前把值给记下来,每次点击selectedindex都会被计算属性计算一次
            this.lastSelected = this.selectedIndex;
            // console.log(this.lastSelected)
            if(index === -1){index = this.names.length - 1}
            if(index === this.names.length){index=0}
            // console.log(this.selectedIndex)
            this.$emit('update:selected',this.names[index]);
        },
        noPlay(){
          window.clearTimeout(this.timeId);
          this.timeId = null;
        },
        plays(){
            if(this.autoplay){
                this.playAutopaly();
            }
        },
        playAutopaly(){
            // settimeou模仿interval
            if(this.timeId){return}
            let run = ()=>{
                // 当前的index值
                let index = this.names.indexOf(this.getSelected());
                let newIndex = index+1;
                // this.$emit('update:selected',names[newIndex]);
                //告诉外界选中的newIndex
                this.selectedClick(newIndex);
                this.timeId = setTimeout(run,2000);
            };
            this.timeId = setTimeout(run,2000);
        }
    }

}
</script>

<style scoped lang="scss">
.x-slide{
    display: inline-block;
.x-slide-window,.x-slide-warpper{
    position: relative;
    overflow: hidden;
    height: 100%;
}
.slide-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.slide-icon{
    width: 20px;
    height: 20px;
    background-color: #ddd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin:0 4px;
    cursor: pointer;
}
.active{
    background-color: #000;
    color: #ffffff;
    cursor: default;
}
}

</style>
