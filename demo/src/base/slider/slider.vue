<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide v-for="slide in swiperSlides">
        <img :src="slide" alt="" style="width: 100%;height: 100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "index",
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay:true,
          loop:true,
          speed:400,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: ['http://img.zcool.cn/community/017b2a5938c8bca8012193a37db72c.jpg@2o.jpg','http://img.zcool.cn/community/0190f9591d445eb5b3086ed4a73742.jpg@1280w_1l_2o_100sh.webp','http://img.zcool.cn/community/01862f591d4460a801216a3e2f2468.jpg@1280w_1l_2o_100sh.webp','http://img.zcool.cn/community/01c7d2591d445fa801216a3efb2271.jpg@1280w_1l_2o_100sh.jpg','http://img.zcool.cn/community/01ca21591d4466a801216a3e874555.jpg@1280w_1l_2o_100sh.jpg']
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .swiper{
    width: 100%;

  }
  .swiper-slide{
    width: 100%;

  }
</style>

