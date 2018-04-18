<template>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="index">
        <span class="index-icon icon"></span><br>
        <span>首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="invest">
        <span class="invest-icon icon"></span><br>
        <span>投资</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="find">
        <span class="find-icon icon"></span><br>
        <span>发现</span>
      </router-link>
      <router-link tag="div" class="tab-item" :to="account">
        <span class="account-icon icon"></span><br>
        <span>我的</span>
      </router-link>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "tab",
        data(){
          return {
            // account:String
          }
        },
        computed: {
          account() {
            return this.sesstion ? 'account' : 'login'
          },
          ...mapGetters([
            'sesstion'
          ])
        },

    }
</script>

<style scoped>
  .tab{
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;;
    font-size: 16px;
    padding:5px 0;
    color:#8E8E93;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .icon{
    display: inline-block;
    width:32px;
    height: 32px;
  }
  .index-icon{
    background: url("../../common/img/home.png");
  }
  .invest-icon{
    background: url("../../common/img/invest.png");
  }
  .find-icon{
    background: url("../../common/img/find.png");
  }
  .account-icon{
    background: url("../../common/img/account.png");
  }
  .router-link-active{
    color:#FF3B5E;
  }
  .router-link-active .index-icon{
    background: url("../../common/img/home1.png");
  }
  .router-link-active .invest-icon{
    background: url("../../common/img/invest1.png");
  }
  .router-link-active .find-icon{
    background: url("../../common/img/find1.png");
  }
  .router-link-active .account-icon{
    background: url("../../common/img/account1.png");
  }
</style>
