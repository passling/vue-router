<template>
  <div>
    <slider></slider>
    <goods-list></goods-list>
  </div>

</template>

<script>
    import Slider from '../../base/slider/slider'
    import GoodsList from '../../base/goods-list/goods-list'
    export default {
        name: "index",
      components: {
          Slider,
          GoodsList
      }

    }
</script>

<style scoped>

</style>
