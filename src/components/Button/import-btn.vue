<style scoped lang="less">
    .export-box{
        cursor: pointer;
        position: relative;
        margin-left: 10px;
        .img{
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(../../assets/image/import.png) no-repeat;
        }
        span{
            vertical-align: middle;
        }
    }
    .export-box:hover{
        color: #fd8024;
    }
    .export-box:hover .img{
        background: url(../../assets/image/importColor.png) no-repeat;
    }
</style>
<template>
  <div class='export-box' @click="btnClick">
    <span class="img"></span>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: "importBtn",
  data() {
    return {
    };
  },
  props: {
      title:{
          type:String,
          default:'导入'
      }
  },
  created() {},
  computed: {},
  methods: {
      btnClick(){
          this.$emit('btnClick');
      }
  }
};
</script>