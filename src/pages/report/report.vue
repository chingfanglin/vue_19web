<template>
  <div style="test">
    <header-bar></header-bar>
  
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="260px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div v-if="item==='收入'">
            <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
            <template v-if="showContent002">
              <form-preview :header-label="'付款金额'" header-value="¥7500.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
            </template>
          </div>
          <div v-if="item==='逾期'">
  
          </div>
          <div v-if="item==='支出'">
  
          </div>
        </swiper-item>
      </swiper>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

import { Tab, TabItem, Swiper, SwiperItem, Cell, CellBox, FormPreview } from 'vux'
const list = () => ['收入', '逾期', '支出']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    HeaderBar,
    FooterBar,
    Cell,
    CellBox,
    FormPreview
  },
  data() {
    return {
      list2: list(),
      demo2: '收入',
      index: 0,
      showContent002: false,
      list: [{
        label: '項目',
        value: '房租'
      }, {
        label: '來源',
        value: '101 王曉明'
      }, {
        label: '金額',
        value: '7500'
      }],
      buttons1: [{
        style: 'default',
        text: '修改',
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }, {
        style: 'primary',
        text: '刪除',
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }]
    }
  }
}
</script>
