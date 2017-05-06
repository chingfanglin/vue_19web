

<template>

<div style="test">
    <header-bar :showBackButton="true"></header-bar>
    <scroller lock-x ref="scrollerEvent" :height="-95+'px'">
        <div class="box2">
            <x-input title="系統名稱" type="text" placeholder="請輸入系統名稱" v-model="system_name"></x-input>
            <x-input title="姓氏" type="text" placeholder="請輸入姓氏" v-model="last_name"></x-input>
            <x-input title="姓名" type="text" placeholder="請輸入姓名" v-model="first_name"></x-input>
            <x-input title="電話" type="number" placeholder="請輸入電話" v-model="local_phone"></x-input>
            <x-input title="手機" type="number" placeholder="請輸入手機" v-model="cell_phone"></x-input>
            <x-input title="信箱" name="email" placeholder="請輸入信箱" v-model="email" is-type="email" ref="email"></x-input>
            <x-input title="密碼" type="password" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
            <x-input title="確認密碼" v-model="confirm_password" type="password" placeholder="" :equal-with="password" ref="confirm_password"></x-input>
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
    </tabbar>
</div>

</template>

<script>

import {
    XInput, Group, Tabbar, TabbarItem, Radio, Scroller
}
from 'vux'
import axios from 'axios'
import {
    mapState, mapActions
}
from 'vuex'
import HeaderBar from '../../components/header.vue'
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
    methods: {
        ...mapActions(['setRegistered']),
            change(value) {
                console.log('change', value)
            },
            checkValid() {
                const system_name = this.system_name
                const last_name = this.last_name
                const first_name = this.first_name
                const cell_phone = this.cell_phone
                const local_phone = this.local_phone
                const email = this.email
                const password = this.password
                const confirm_password = this.confirm_password
                let check = false

                if (!system_name) {
                    check = true
                } else
                if (!last_name) {
                    check = true
                } else
                if (!first_name) {
                    check = true
                } else
                if (!cell_phone) {
                    check = true
                } else
                if (!email || !this.$refs.email.valid) {
                    check = true
                } else
                if (!password) {
                    check = true
                } else
                if (!confirm_password || !this.$refs.confirm_password.valid) {
                    check = true
                }
                return check
            },
            saveButton() {
                if (this.checkValid()) {
                    this.$vux.toast.show({
                        text: '請完整輸入',
                        type: "cancel"
                    })
                    return
                }

                let options = {
                    SystemName: this.system_name,
                      LastName: this.last_name,
                      FirstName: this.first_name,
                      Sex: this.sex,
                      Cellphone: this.cell_phone,
                      LocalPhone: this.local_phone,
                      email: this.email,
                      ConfirmPassword: this.password,
                      Password: this.confirm_password
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
                            type: "cancel"
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
            system_name: "",
            last_name: "",
            first_name: "",
            sex: "A301",
            cell_phone: "",
            local_phone: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    }
}

</script>
