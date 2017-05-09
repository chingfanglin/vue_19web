
<template>
  <div style="test">
    <header-bar :showBackButton="true"></header-bar>
    <scroller lock-x ref="scrollerEvent" :height="-95+'px'">
      <div class="box2">
        <x-input title="姓名" type="text" placeholder="請輸入姓名" v-model="username"></x-input>
        <x-input title="電話" type="number" placeholder="請輸入電話" v-model="local_phone"></x-input>
        <x-input title="手機" type="number" placeholder="請輸入手機" v-model="cell_phone"></x-input>
        <x-input title="信箱" name="email" placeholder="請輸入信箱" v-model="email" is-type="email" ref="email"></x-input>
        <x-input title="學校" type="text" placeholder="請輸入學校" v-model="school"></x-input>
        <x-input title="科系" type="text" placeholder="請輸入科系" v-model="department"></x-input>
        <x-input title="公司" type="text" placeholder="請輸入公司" v-model="company"></x-input>
        <x-input title="職務" type="text" placeholder="請輸入職務" v-model="duties"></x-input>
        <group :title="'性別'">
          <radio :options="sex_radio" v-model="sex"></radio>
        </group>
      </div>
    </scroller>
    <tabbar>
      <tabbar-item>
        <i slot="icon" class="fa fa-floppy-o" aria-hidden="true" v-on:click="saveButton"></i>
        <span slot="label">存檔</span>
      </tabbar-item>
       <tabbar-item>
        <i slot="icon" class="fa fa-balance-scale" aria-hidden="true" v-on:click="rentButton"></i>
        <span slot="label">房租</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {
    XInput,
    Group,
    Tabbar,
    TabbarItem,
    Radio,
    Scroller
  }
  from 'vux'
  import axios from 'axios'
  import {
    mapState
  }
  from 'vuex'
  import HeaderBar from '../../../components/header.vue'
  export default {
    components: {
      HeaderBar,
      XInput,
      Group,
      Tabbar,
      TabbarItem,
      Radio,
      Scroller
    },
    computed: {
      ...mapState([
        'tenant',
        'tenantid'
      ])
    },
    mounted() {
      this.checkTenantID()
    },
    methods: {
      change(value) {
        console.log('change', value)
      },
      checkTenantID() {
        const tenantid = this.tenantid
        let tenantDetail
        this.cell_phone
        if (tenantid) {
          tenantDetail = this.tenant.filter((currentValue, index, arr) =>
          currentValue.id === tenantid)
          if (tenantDetail) {
            this.username = tenantDetail[0].name
            this.email = tenantDetail[0].email
            this.cell_phone = tenantDetail[0].mobile
            this.school = tenantDetail[0].school
            this.department = tenantDetail[0].department
            this.local_phone = tenantDetail[0].local_phone
            this.isAddButton = false
          }
        }
      },
      checkValid() {
        const username = this.username
        const cellPhone = this.cell_phone
        const localPhone = this.local_phone
        const email = this.email
        let check = false
  
        if (!username) {
          check = true
        } else
        if (!cellPhone) {
          check = true
        } else
        if (!localPhone) {
          check = true
        } else
        if (!email || !this.$refs.email.valid) {
          check = true
        }
        return check
      },
      rentButton() {

      },
      saveButton() {
        if (this.checkValid()) {
          this.$vux.toast.show({
            text: '請完整輸入',
            type: 'cancel'
          })
          return
        }
  
        let options = {
          SystemName: this.system_name,
          username: this.username,
          Sex: this.sex,
          Cellphone: this.cell_phone,
          LocalPhone: this.local_phone,
          email: this.email
        }
  
        const router = this.$router
        const loading = this.$vux.loading
        const toast = this.$vux.toast
        loading.show({
          text: 'Loading'
        })
  
        axios.post('/user', options)
          .then(function(response) {
            loading.hide()
            router.push({
              'path': '/home'
            })
          })
          .catch(function(error) {
            loading.hide()
            toast.show({
              text: '連線錯誤',
              type: 'cancel'
            })
          })
      }
    },
    data() {
      return {
        sex_radio: [{
          key: 'A301',
          value: '男'
        }, {
          key: 'A302',
          value: '女'
        }],
        username: '',
        sex: 'A301',
        cell_phone: '',
        local_phone: '',
        email: '',
        school: '',
        department: '',
        company: '',
        duties: ''
      }
    }
  }
</script>
