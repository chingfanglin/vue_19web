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
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="onItemClick(item)" :key="index">{{item}}</tab-item>
      </tab>
      <Income v-if="showContent001"></Income>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'
import Income from '../../pages/report/income.vue'
import { Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem, Datetime, Group, XButton } from 'vux'
const list = () => ['收入', '逾期', '支出']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    HeaderBar,
    FooterBar,
    Flexbox,
    FlexboxItem,
    XButton,
    Datetime,
    Group,
    Income
  },
  methods: {
    onItemClick(index) {
      if (index === '收入') {
        this.$data.showContent001 = true
      } else {
        this.$data.showContent001 = false
      }
      console.log('on item click:', index)
    },
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
      showContent001: true,
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
