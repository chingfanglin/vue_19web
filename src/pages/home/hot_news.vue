<template>
  <div>
    <scroller lock-x scrollbar-y use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-225+'px'">
       <div class="box2">
          <p v-for="i in 80">placeholder {{i}}</p>
       </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller } from 'vux'
export default {
  components: {
    Scroller
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
    }
  }
}
</script>
