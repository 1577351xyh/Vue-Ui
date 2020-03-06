<template>
     <div class="gulu-checkbox">
       <input type="checkbox">
       <span class="gulu-checkbox-text">
         <slot></slot>
       </span>
     </div>
</template>
<script>
export default {
  data(){
     return{
     }
  }
}
</script>
<style lang='less' scope>
.gulu-checkbox{
  display: flex;
  .gulu-checkbox-text{
    font-size:12px;
  }
}
</style>