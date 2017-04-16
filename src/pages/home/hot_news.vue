<template>
  <div>
    <scroller lock-x scrollbar-y use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-225+'px'">
       <div class="box2">
          <cell-box v-for="item in list" class="sub-item" is-link  :link="item.url">{{item.title}}</cell-box>
       </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, CellBox } from 'vux'
export default {
  components: {
    Scroller,
    CellBox
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })
  },
  methods: {
    load (uuid) {
      setTimeout(() => {
        this.$refs.scroller.donePulldown()
      }, 2000)
    }
  },
  data () {
    return {
      list: [{
        url: 'https://house.udn.com/house/story/5886/2400762',
        title: '租賃發展條例通過 房東空屋出租可減稅'
      },
      {
        url: 'https://house.udn.com/house/story/5886/2395349',
        title: '包租代管 北市房東最有利'
      },
      {
        url: 'https://house.udn.com/house/story/5886/2393314',
        title: '小房東 可找包租代管'
      },
      {
        url: 'https://house.udn.com/house/story/5886/2393272',
        title: '民宅包租代管 享租稅優惠'
      },
      {
        url: 'https://house.udn.com/house/story/5888/2404422',
        title: '專家帶路／置產當包租公 增值空間可期'
      },
      {
        url: 'https://house.udn.com/house/story/5887/2400998',
        title: '老屋行情 北台灣跌很兇 中南部漲很大'
      },
      {
        url: 'https://house.udn.com/house/story/5887/2402583',
        title: '全台房市回溫！ 這五區竟比去年還冷'
      },
      {
        url: 'https://house.udn.com/house/story/5887/2376021',
        title: '房價落底沒？ 看看身邊有沒有這些變化'
      },
      {
        url: 'https://house.udn.com/house/story/5887/2400307',
        title: '舊案賣不完新案繼續推 這些地區待售爆量'
      }]
    }
  }
}
</script>
