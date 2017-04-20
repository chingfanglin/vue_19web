

<template>
  <div>
    <x-header :left-options="{showBack: showBackButton}" style="background-color:#46A3FF;">
      <span class="db_logo_text" v-if="!showBackButton">{{title}}</span>
    </x-header>
  </div>
</template>


<script>
import { XHeader, Actionsheet } from 'vux'
export default {
  components: {
    XHeader,
    Actionsheet
  },
  data () {
    return {
      title: this.settingHeader(),
      showMenus: true
    }
  },
  methods: {
    settingHeader () {
      return this.initialTitle
    }
  },
  props: {
    initialTitle: {
      type: String,
      default: '好好租'
    },
    showBackButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>
.db_logo_text {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 900;
}
</style>
