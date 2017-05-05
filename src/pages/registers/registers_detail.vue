

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
            <x-input title="確認密碼" v-model="password2" type="password" placeholder="" :equal-with="password"></x-input>
            <group :title="'性別'">
                <radio :options="sex_radio"  v-model="sex"></radio>
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
        change(value) {
                console.log('change', value)
            },
            saveButton() {

                if (!this.$refs.email.valid) return

                let options = {
                    SystemName: this.system_name,
                      LastName: this.last_name,
                      FirstName: this.first_name,
                      Sex: this.sex,
                      Cellphone: this.cell_phone,
                      LocalPhone: this.local_phone,
                      email: this.email,
                      ConfirmPassword: this.password,
                      Password: this.password2
                }
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
            password2: ""
        }
    }
}

</script>
