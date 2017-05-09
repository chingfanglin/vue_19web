<template>
    <tabbar>
      <tabbar-item  :selected="'/home' === this.$route.path" link="/home">
        <i slot="icon" class="fa fa-home" aria-hidden="true"></i>
        <span slot="label">首頁</span>
      </tabbar-item>
      <tabbar-item show-dot :selected="'/category' === this.$route.path" link="/category">
        <i slot="icon" class="fa fa-handshake-o" aria-hidden="true"></i>
        <span slot="label">房屋</span>
      </tabbar-item>
      <tabbar-item :selected="'/report' === this.$route.path" link="/report">
        <i slot="icon" class="fa fa-line-chart" aria-hidden="true"></i>
        <span slot="label">報表</span>
      </tabbar-item>
      <tabbar-item :selected="'/my' === this.$route.path" link="/my">
        <i slot="icon" class="fa fa-user-o" aria-hidden="true"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
