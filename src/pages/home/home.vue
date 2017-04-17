<template>
  <div style="test">
    <header-bar></header-bar>
      <swiper :list="list" auto style="margin:0 auto;" height="130px" dots-class="custom-bottom"
      dots-position="right"></swiper>
      <hot-news></hot-news>
      <footer-bar></footer-bar>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import HotNews from '../../pages/home/hot_news.vue'
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

export default {
  components: {
    Swiper,
    HotNews,
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      list: [{
        url: '',
        img: 'http://cdn2.ettoday.net/images/1624/1624023.jpg',
        title: ''
      }, {
        url: '',
        img: 'http://pic.pimg.tw/realestates/1424788034-438499438.jpg?v=1424788036',
        title: ''
      }, {
        url: '',
        img: 'https://i.ytimg.com/vi/5nZ8lIhG3Nw/maxresdefault.jpg',
        title: ''
      }]
    }
  }
}
</script>
