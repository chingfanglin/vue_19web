<template>
  <div style="test">
    <header-bar></header-bar>
  
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['收入', '逾期', '支出']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      list2: list(),
      demo2: '收入',
      index: 0
    }
  }
}
</script>
