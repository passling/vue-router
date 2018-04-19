<template>
  <div class="box">
    <div class="content">
      <div class="group">
        <a href="javascript:void(0)">
          <div><img src="../../common/img/goods@2x.png" alt="商品"></div>
          <p>商品</p>
        </a>
      </div>
      <div class="group">
        <a href="javascript:void(0)">
          <div><img src="../../common/img/order@2x.png" alt="商品"></div>
          <p>订单</p>
        </a>
      </div>
      <div class="group">
        <a href="javascript:void(0)">
          <div><img src="../../common/img/goods_manager@2x.png" alt="商品"></div>
          <p>商品管理</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "account",
        computed:{
          ...mapGetters([
            'sesstion'
          ])
        },
        created(){
          if(!this.sesstion){
            this.$router.push('/login')
          }
        }
    }
</script>

<style scoped>
  .content{
    width: 100%;
    padding-top:25px;
  }
  .content:after{
    display: table;
    content: '';
    clear: both;
  }
  .group{
    width:38.5%;
    background: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(100,150,255,0.15);
    float: left;
    font-size: 14px;
  }
  .group:nth-child(odd){
    margin:0 7% 15px 8%;
  }
  .group a{
    width: 100%;
    display: block;
  }
  .group img{
    display: block;
    margin:17% auto 0 auto;
    width: 45%;
  }
  .group p{
    line-height: 14px;
    margin-top:9%;
    padding-bottom: 18%;
    text-align: center;
  }

</style>

