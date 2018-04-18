<template>
    <div>
      <form>
        <fieldset>
          <legend>登录</legend>
          <div class="from-group">
            <input type="text" id="radio" placeholder="输入你的姓名" v-model="name1">
            <label for="radio">Name</label><br>
            <p v-text=""></p>
          </div>
          <div class="form-group">
            <input type="text" id="age" placeholder="输入你的年龄" v-model="age">
            <label for="radio">Age</label>

          </div>
          <button @click="subForm()" type="button">提交</button>
        </fieldset>

      </form>
    </div>
</template>

<script>
  import axios from 'axios'
  import {mapActions} from 'vuex'
    export default {
        name: "login",
        data(){
          return {
            name1:'',
            age:''
          }
        },
        methods:{
          subForm(){
            const _this=this
            console.log(this.name1,this.age);
              axios.post('https://www.wateroot.com/http/send', {
                url: 'http://www.baidu.com'
              }).then(function (res) {
                console.log('成功了')
                sessionStorage.setItem("site", "value");
                _this.setSesstion(true);
                _this.$router.push('/account')
              }).catch(function(err){
                console.log(err)
                alert('提交失败')
              })
          },
          ...mapActions([
            'setSesstion'
          ])
        }
    }
</script>

<style scoped>
  .form-group{
    margin:20px 0;
  }
</style>
