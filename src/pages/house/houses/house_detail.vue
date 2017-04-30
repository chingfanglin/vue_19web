<style scoped>

span {
    font-size: 12px;
}

</style>

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group>
        <x-input title="名稱" name="roomname" placeholder="7號 雅舍小築" is-type="china-name"></x-input>
        <x-input title="詳細地址" name="address" is-type="china-name"></x-input>
        <cell>
            <checker v-model="Property" default-item-class="Property-item" selected-item-class="Property-item-selected">
                <checker-item v-for="i in ['透天','公寓','大樓','店面','廠房']" :key="i" :value="i">{{i}}</checker-item>

            </checker>
        </cell>
        <x-input title="銀行代碼" type="text" placeholder="" v-model="code" :max="6"></x-input>
        <x-input title="帳號" type="text" placeholder="" v-model="account" :max="12"></x-input>
        <x-input title="共同管理人ID" placeholder="" v-model="jointly"></x-input>
    </group>

    <tabbar>
        <tabbar-item v-if="isAddButton">
            <i slot="icon" class="fa fa-plus fa-2x" aria-hidden="true"></i>
            <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item v-else>
            <i slot="icon" class="fa fa-wrench fa-2x" aria-hidden="true"></i>
            <span slot="label">修改</span>
        </tabbar-item>
    </tabbar>
</div>

</template>

<script>

import HeaderBar from '../../../components/header.vue'
import {
    XInput, Group, Cell, Checker, CheckerItem, Tabbar, TabbarItem
}
from 'vux'
export default {
    components: {
        HeaderBar,
        XInput,
        Group,
        Cell,
        Checker,
        CheckerItem,
        Tabbar,
        TabbarItem
    },
    methods: {},
    data() {
        return {
            Property: '透天',
            code: '',
            account: '',
            jointly: '',
            isAddButton: true,
        }
    }
}

</script>
