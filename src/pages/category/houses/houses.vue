

<template>
  <div>
    <header-bar :showBackButton="true"></header-bar>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <scroller lock-x scrollbar-y :scrollbarY="false" use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-115+'px'">
        <div class="box2">
          <checklist v-if="isDel" :title="'確認刪除後無法還原'" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>
          <div v-else slot="content" v-for="house in houses" class="demo-content vux-1px-tb" v-on:click="linkButton(house.id)">
            <cell :title="house.name" :inline-desc="house.address" :link="'/housepage'"></cell>
          </div>
        </div>
      </scroller>
    </group>
    <tabbar v-if="isDel">
      <tabbar-item>
        <i slot="icon" class="fa fa-reply fa-4x" aria-hidden="true" v-on:click="cancelButton"></i>
        <span slot="label">取消</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="fa fa-trash fa-4x" aria-hidden="true" v-on:click="checkDel"></i>
        <span slot="label">刪除房屋</span>
      </tabbar-item>
    </tabbar>
    <tabbar v-else>
      <tabbar-item>
        <i slot="icon" class="fa fa-plus fa-4x" aria-hidden="true" v-on:click="addButton"></i>
        <span slot="label">新增房屋</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="fa fa-trash fa-4x" aria-hidden="true" v-on:click="delButton"></i>
        <span slot="label">刪除房屋</span>
      </tabbar-item>
    </tabbar>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
  import {
    Group,
    Cell,
    Scroller,
    Tabbar,
    TabbarItem,
    XButton,
    Checklist,
    Actionsheet
  }
  from 'vux'
  
  import {
    mapState,
    mapActions
  }
  from 'vuex'
  
  import HeaderBar from '../../../components/header.vue'
  
  export default {
    components: {
      HeaderBar,
      Cell,
      Group,
      Scroller,
      Tabbar,
      TabbarItem,
      XButton,
      Checklist,
      Actionsheet
    },
    computed: {
      ...mapState([
        'houses',
        'houseid'
      ])
    },
    mounted() {
      this.getHouses()
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    methods: {
      ...mapActions(['getHouses']),
      load(uuid) {
        setTimeout(() => {
          this.$refs.scroller.donePulldown()
        }, 2000)
      },
      linkButton(houseid) {
        this.$store.commit('GET_HOUSEID', houseid)
      },
      addButton() {
        this.$store.commit('GET_HOUSEID', 0)
        this.$router.push({
          'path': '/house/housedetail'
        })
      },
      cancelButton() {
        this.isDel = false
      },
      delButton() {
        const houses = this.houses
        this.objectList = []
        let data
        for (var k in houses) {
          data = {
            key: houses[k].id,
            value: houses[k].name
          }
          this.objectList.push(data)
        }
        this.isDel = true
      },
      click(key) {
        console.log(key)
      },
      checkDel() {
        this.show1 = true
      },
      change(val) {
        console.log('change', val)
      }
    },
    data() {
      return {
        isDel: false,
        objectList: [],
        objectListValue: [],
        show1: false,
        menus1: {
          'title.noop': '你確定嗎?<br/><span style="color:#666;font-size:12px;">刪除後無法再撤銷.</span>',
          delete: '<span style="color:red">刪除</span>'
        }
      }
    }
  }
</script>
