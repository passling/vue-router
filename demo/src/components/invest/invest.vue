<template>
    <div>
      <div class="recommend-box">
        <div class="recommend-title">
          相关推荐
          <img src="../../common/img/CombinedShape@2x.png" alt="">
          <img src="../../common/img/CombinedShape@2x.png" alt="">
        </div>
        <div class="recommend-product">
          <ul>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/pro1.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/pro2.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/pro3.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/pro4.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/0.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/30.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
            <li class="recommend-list">
              <a href="javascript:void(0)">
                <div class="product-shortcut">
                  <img src="../../common/img/90.jpg" alt="">
                </div>
                <div class="recommend-text">
                  <p>2016新品方根舒适女鞋</p>
                  <p>&yen;2850</p>
                </div>
              </a>

            </li>
          </ul>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "invest",
    }
</script>

<style scoped>

  .recommend-box:after{
    content: '';
    clear: both;
    display: table;
  }
  .recommend-title{
    font-size: 14px;
    color: #9096A6;
    line-height: 15px;
    padding: 15px;
    position: relative;
    text-align: center;
  }
  .recommend-title img{
    display: block;
    position: absolute;
    top:50%;
    width: 140px;
    height: 2px;
  }
  .recommend-title img:last-child{
    right: 0.3rem;
  }
  .recommend-list{
    background: #fff;
   width: 42%;;
  }
  .product-shortcut{
    width: 100%;
    height: 42%;
    overflow: hidden;
  }
  .product-shortcut img{
    width: 100%;
  }
  .recommend-text{
    padding:10px 0 10px 10px;
  }
  .recommend-text p{
    font-size: 14px;
    color: #23252F;
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recommend-text p:last-child{
    margin-top: 7px;
    color: #FF3B5E;
  }
  .recommend-list:nth-child(odd){
    margin: 0 5% 15px 5%;
  }
  .recommend-list{
    float: left;
  }
  .recommend-title {
    font-size: 14px;
    color: #9096A6;
    line-height:15px;
    padding: 15px;
    position: relative;
    text-align: center;
  }
</style>
