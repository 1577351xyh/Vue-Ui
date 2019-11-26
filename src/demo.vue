<template>
    <div>
        <slides :selected.sync="selected" width="200px" height="300px">
            <slides-item name="1">
                <div class="box">1</div>
            </slides-item>
            <slides-item name="2">
                <div class="box">2</div>
            </slides-item>
            <slides-item name="3">
                <div class="box">3</div>
            </slides-item>
        </slides>
    </div>
</template>

<script>
import slides from './slides'
import slidesItem from './slides-item'
export default {
    name: "",
    data(){
        return{
            selected:'3'
        }
    },
    components:{
        slidesItem,
        slides,
    }
}
</script>

<style scoped lang="scss">
.box{
    background-color: pink;
    border: 1px solid #ddd;
    height: 200px;
    width: 200px;
}
</style>
