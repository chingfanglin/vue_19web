<template>
  <div style="test">
    <header-bar></header-bar>
      <div>
        <group-title></group-title>
        <grid>
          <grid-item  :href="cty.url" v-for="cty in categorys">
            <i slot="icon"  :class="cty.class_name" aria-hidden="true" ></i>
            <span slot="label">{{cty.text }}</span>
          </grid-item>
        </grid>
      </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

export default {
  components: {
    HeaderBar,
    FooterBar,
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      categorys: [
        {text: '房間', url: '#/home', class_name: 'fa fa-id-badge fa-2x'},
        {text: '房客', url: 'javascript:void 0', class_name: 'fa fa-address-card-o fa-2x'},
        {text: '訊息', url: 'javascript:void 0', class_name: 'fa fa-envelope-open-o fa-2x'},
        {text: '提醒設定', url: 'javascript:void 0', class_name: 'fa fa-university fa-2x'},
        {text: '租期', url: 'javascript:void 0', class_name: 'fa fa-handshake-o fa-2x'},
        {text: '維修', url: 'javascript:void 0', class_name: 'fa fa-wrench fa-2x'},
        {text: '提醒', url: 'javascript:void 0', class_name: 'fa fa-id-badge fa-2x'},
        {text: '收支', url: 'javascript:void 0', class_name: 'fa fa-usd fa-2x'},
        {text: '廠商', url: 'javascript:void 0', class_name: 'fa fa-hand-spock-o fa-2x'},
        {text: '評價', url: 'javascript:void 0', class_name: 'fa fa-hand-peace-o fa-2x'}
      ]
    }
  }
}
</script>


<style scoped>
[class^="icon-"], [class*=" icon-"] {
    display: inline-block;
    width: 100%;
}
  span {
    font-size: 18px
  }
  .grid-center {
  display: block;
  text-align: center;
  color: #666;
  }
	.category_list{
		font-size: 0;
		padding: 10px 5px;
		text-align: center;
		box-sizing: border-box;
	}
	.category_list ul li{
		display: inline-block;
		width: 30%;
		height: 60px;
		margin: 0 3px 10px 3px;
	}
	.category_list a{
		display: block;
		line-height: 60px;
		text-align: center;
		color: #4a4a4a;
		font-size: 14px;
		border-radius: 5px;
	}

  .weui-grid__label:before {
    font-size: 15px;
  }
</style>
