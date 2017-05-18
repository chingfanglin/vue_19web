<template>
  <div style="test">
    <header-bar></header-bar>
    <div>
      <group>
        <flexbox>
          <flexbox-item>
            <datetime v-model="startDate" @on-change="change1" :title="'Birthday'" clear-text="today" @on-clear="setToday">
              <x-button>{{startDate}}</x-button>
            </datetime>
          </flexbox-item>
          <flexbox-item>
            <datetime v-model="endDate" @on-change="change2" :title="'Birthday'" clear-text="today" @on-clear="setToday">
              <x-button>{{endDate}}</x-button>
            </datetime>
          </flexbox-item>
        </flexbox>
      </group>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="1360px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div v-if="item==='收入'">
            <scroller lock-x scrollbar-y use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-215+'px'">
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
              <template v-if="showContent002">
                <form-preview :header-label="'付款金额'" header-value="¥7500.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
              </template>
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
              <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
            </scroller>
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

import { Tab, TabItem, Swiper, SwiperItem, Cell, CellBox, Flexbox, FlexboxItem, FormPreview, Datetime, Group, XButton, Scroller } from 'vux'
const list = () => ['收入', '逾期', '支出']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    HeaderBar,
    Cell,
    CellBox,
    FormPreview,
    FooterBar,
    Flexbox,
    FlexboxItem,
    XButton,
    Datetime,
    Group,
    Scroller
  },
  methods: {
    change1(value) {
      console.log('change', value)
    },
    change2(value) {
      console.log('change', value)
    },
    setToday(value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.$data.startDate = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    },
    load(uuid) {
      setTimeout(() => {
        this.$refs.scroller.donePulldown()
      }, 2000)
    }
  },
  data() {
    return {
      startDate: '2016-11-11',
      endDate: '2017-10-11',
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
