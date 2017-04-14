<template>
  <div>
    <div class="vux-demo">

      <h1> </h1>
      <swiper :list="list" auto></swiper>
    </div>
    <group title="">
      <tab :line-width="2" active-color="#fc378c">
        <tab-item :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
      </tab>
    </group>
    <hot-news></hot-news>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { Group, Cell, Flexbox, FlexboxItem, Swiper, Tab, TabItem } from 'vux'
import HotNews from '../../pages/home/hot_news.vue'
import FooterBar from '../../components/footer.vue'

export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Swiper,
    Tab,
    TabItem,
    HotNews,
    FooterBar
  },
  data () {
    return {
      demo2: 'test2',
      list2: ['test1', 'test2', 'test3', 'test4', 'test5'],
      msg: 'Hello World!',
      list: [{
        url: '',
        img: 'http://bnetcmsus-a.akamaihd.net/cms/blog_header/2w/2WL7MUP3U5PZ1415366807507.jpg',
        title: ''
      }, {
        url: '',
        img: 'https://s.pacn.ws/gallery/large/GA.04613.0001.jpg',
        title: ''
      }, {
        url: '',
        img: 'http://gamer.vjmedia.com.hk/wp-content/uploads/2016/11/Zelda-4-900x506.jpg',
        title: ''
      }]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
