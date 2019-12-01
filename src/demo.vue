<template>
    <div>
        <slides :selected.sync="selected" width="600px" height="300px" autoplay>
            <slides-item name="a">
                <div class="box">1</div>
            </slides-item>
            <slides-item name="b">
                <div class="box">2</div>
            </slides-item>
            <slides-item name="c">
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
            selected:'a'
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
    background-color: #dddddd;
    height: 200px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #ffffff;
}
</style>
