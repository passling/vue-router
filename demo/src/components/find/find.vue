<template>
  <div class="box">
    <div class="banner">
      <img src="../../common/img/0.jpg" alt="">

      <a href="javascript:void(0)" onclick="history.go(-1)" class="return">
        <img src="../../common/img/detail-return@2x.png" alt="">
      </a>
      <a href="javascript:void(0)">
        <img src="../../common/img/car@2x.png" alt="">
      </a>
    </div>

    <!--头部描述信息-->
    <div class="goods-profile">
      <p class="goods-title">2016新品正品高跟女鞋时尚新品女鞋</p>
      <p class="height-light">&yen;30000.00</p>
      <div class="goods-service">
        <ul>
          <li>
            快递:&nbsp;0.0
          </li>
          <li>
            月销8笔
          </li>
          <li>
            香港
          </li>
        </ul>
      </div>
    </div>

    <!--支付方式-->
    <div class="pay-type">
      <ul>
        <li><span class="pay-icon">空间币支付</span></li>
        <li><span  class="pay-icon">支付宝支付</span></li>
        <li><span  class="pay-icon">微信支付</span></li>
      </ul>
    </div>


    <!--选择商品属性-->
    <div class="choose-box">
      选择&nbsp;颜色&nbsp;款式分类
      <span></span>
    </div>

    <!--评价模块-->
    <div class="comment">
      <div class="comment-title">宝贝评价(3)</div>
      <div class="comment-detail">
        <div>
          <div class="comment-user"><img src="../../common/img/user@2x.png" alt=""></div>
          <div class="commentator">买丢</div>
        </div>
        <p class="comment-text">鞋子还行</p>
        <p class="comment-goods">颜色分类:浅蓝色;&nbsp;款式:39</p>
      </div>
      <div class="btn-box">
        <a class="btn" href="javascript:void(0)">查看全部评价</a>
      </div>

    </div>

    <!--店铺信息-->
    <div class="shop">
      <div class="manager">
        <div class="manager-shortcut"><img src="../../common/img/manager@2x.png" alt=""></div>
        <div class="manager-name">傅晓田</div>
      </div>
      <div class="shop-tab">
        <a href="javascript:void(0)" class="btn">查看分类</a><!--
                --><a href="javascript:void(0)" class="btn">进店看看</a>
      </div>
    </div>

    <!--图文详情-->
    <div class="detail-box">
      <p>图文详情</p>
      <div>
        <img src="../../common/img/4.jpg" alt="">
        <img src="../../common/img/5.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "find"
    }
</script>

<style scoped>
  /*banner*/
  .banner{
    width: 100%;
    position: relative;
  }
  .banner img{
    display: block;
    width: 100%;
  }
  .banner a{
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top:30px;
  }
  .return{
    left: 15px
  }
  .banner a:last-child{
    right: 15px;
  }
  .pay-icon {
    display: inline-block;
    padding-left: 17px;
    font-size: 10px;
    color: #9e9e9e;
    background: url(../../common/img/pay-icon@2x.png) no-repeat left center;
    background-size: 14px 14px;
  }
  .goods-profile{
    padding: 15px;
    background: #fff;
  }
  .goods-title{
    font-size: 15px;
    color:#23252F;
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .height-light{
    margin:10px 0;
    font-size: 20px;
    line-height: 20px;
    color: #FF3B5E ;
  }
  .goods-service{
    color:#9096A6;
    font-size: 12px;
    line-height: 13px;
  }
  .goods-service:after,.pay-type:after,footer:after,.recommend-box:after,.attr-item:after{
    display: table;
    content: '';
    clear: both;
  }
  .goods-service li,.pay-type li{
    float: left;
    width: 33.3%;
    text-align: center;
  }
  .goods-service li:first-child,.pay-type li:first-child{
    text-align: left;
  }
  .goods-service li:last-child,.pay-type li:last-child{
    text-align: right;
  }
  .pay-type {
    width: 100%;
    padding:15px;
    background: #F9F9F9;
    border-top:1px solid #DDDEE3;
    border-bottom:1px solid #DDDEE3;
  }
  .choose-box{
    cursor: pointer;
    margin:10px 0;
    padding:0 15px;
    color: #23252F;
    font-size: 15px;
    line-height: 44px;
    height: 44px;
    position: relative;
    background: #fff;
  }
  .choose-box span{
    position: absolute;
    display: inline-block;
    width:6px;
    height: 10px;
    background: url("../../common/img/link-arrow@2x.png") no-repeat center;
    background-size: 6px 6px;
    top:50%;
    margin-top:-3px;
    right:15px;

  }

  /*comment*/
  .comment{
    padding: 15px;
    background: #fff;
  }
  .comment-title{
    color:#23252F;
    font-size: 15px;
    line-height: 15px;
  }
  .comment-detail{
    padding:20px 0;
  }
  .comment-user{
    vertical-align: middle;
    margin-right: 10px;
    display: inline-block;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    overflow: hidden;
  }
  .comment-user img{
    display: block;
    width: 100%;
  }
  .commentator{
    vertical-align: middle;
    font-size: 13px;
    line-height: 32px;
    color: #23252F;
    display: inline-block;
  }
  .comment-text{
    font-size: 13px;
    color: #23252F;
    line-height: 14px;
    margin-top:10px;
  }
  .comment-goods{
    font-size: 13px;
    color: #9096A6;
    line-height: 14px;
    margin-top:7px
  }
  .btn-box{
    text-align: center;
  }
  .btn{
    cursor: pointer;
    display:inline-block;
    border: 1px solid #FF3B5E  ;
    color:#FF5A5F;
    line-height: 12px;
    font-size: 12px;
    padding:5px 10px;
    margin:0 auto;
    border-radius: 3px;
    text-align: center;
  }
  .detail-box p{
    background: #fff;
    line-height: 55px;
    height: 55px;
    text-align: center;
  }

  /*shop*/
  .shop{

    margin:10px 0;
    background: #fff;
  }
  .manager{
    padding: 0.3rem ;
  }
  .manager-shortcut,.manager-name{
    display: inline-block;
    vertical-align: middle;
  }
  .manager-shortcut{
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
  }
  .manager-shortcut img{
    display: block;
    width: 100%;
  }
  .manager-name{
    font-size: 17px;
    line-height: 44px;
    color: #23252F;
    margin-left: 15px
  }
  .shop-tab{
    padding:15px 0;
    border:1px solid #DDDEE3;
    text-align: center;
  }
  .shop-tab .btn:first-child{
    margin-right:30px;
  }
  .detail-box{
    background: #ffffff;
    padding-bottom: 0.4rem;
  }
  .detail-box img{
    display: block;
    width: 100%;
  }
</style>
