<template>
  <div style="test">
    <header-bar></header-bar>
      <swiper :list="sliders" auto style="margin:0 auto;" height="130px" dots-class="custom-bottom"
      dots-position="right"></swiper>
      <hot-news></hot-news>
      <footer-bar></footer-bar>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import { mapState, mapActions } from 'vuex'
import HotNews from '../../pages/home/hot_news.vue'
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

export default {
  computed: {
    ...mapState([
      'sliders'
    ])
  },
  mounted () {
    this.getSliders()
  },
  methods: {
    ...mapActions(['getSliders'])
  },
  components: {
    Swiper,
    HotNews,
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      
    }
  }
}
</script>
