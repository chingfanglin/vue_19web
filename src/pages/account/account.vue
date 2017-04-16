<template>
  <div style="test">
    <header-bar></header-bar>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

export default {
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
    }
  }
}
</script>
