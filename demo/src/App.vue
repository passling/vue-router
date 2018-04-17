<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
  #app{
    padding-bottom: 68px;
    background-color: #f2f2f2;
  }
</style>
