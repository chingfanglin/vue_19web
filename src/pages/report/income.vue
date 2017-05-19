<template>
  <div>
    <scroller lock-x scrollbar-y use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-225+'px'">
      <div class="box2">
        <cell :title="'2017/04/30'" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>
        <template v-if="showContent002">
          <form-preview :header-label="'付款金额'" header-value="¥7500.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
        </template>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Cell, Scroller, CellBox, TabItem, FormPreview } from 'vux'
export default {
  components: {
    Cell,
    Scroller,
    CellBox,
    TabItem,
    FormPreview
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })
  },
  methods: {
    load(uuid) {
      setTimeout(() => {
        this.$refs.scroller.donePulldown()
      }, 2000)
    }
  },
  data() {
    return {
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
