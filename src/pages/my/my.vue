

<template>

<div style="test">
    <header-bar :showBackButton="true"></header-bar>
    <group>
        <x-input title="好好租ID" type="text" placeholder="" v-model="user_id"></x-input>
        <x-input title="管理人" type="text" placeholder="" v-model="user_name"></x-input>
        <x-input title="手機" type="number" placeholder="" v-model="mobile"></x-input>
        <x-input title="信箱" name="email" placeholder="請輸入EMAIL" v-model="email" is-type="email"></x-input>
        <x-input title="LINE" type="text" placeholder="" v-model="line_id"></x-input>
        <x-input title="密碼" type="password" placeholder="" v-model="password"></x-input>
    </group>
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
    XInput, Group, Tabbar, TabbarItem
}
from 'vux'
import HeaderBar from '../../components/header.vue'
export default {
    components: {
        HeaderBar,
        XInput,
        Group,
        Tabbar,
        TabbarItem
    },
    methods: {
        change(value) {
                console.log('change', value)
            },
            saveButton() {

            }
    },
    data() {
        return {
            user_id: 13123893,
            user_name: "王大明",
            mobile: "0975000000",
            email: "ABC@gmail.com",
            line_id: "xxxx12",
            password: "123456"

        }
    }
}

</script>
