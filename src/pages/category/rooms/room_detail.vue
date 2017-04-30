<style scoped>

.Property-item {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
}

.Property-item-selected {
    background: #ffffff no-repeat right bottom;
    border-color: #ff4a00;
}

span {
    font-size: 12px;
}

</style>

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group>
        <x-input title="名稱" name="username" placeholder="好好租ID" is-type="china-name"></x-input>
        <datetime v-model="start_date" @on-change="change" :title="'起始日'"></datetime>
        <datetime v-model="end_date" @on-change="change" :title="'到期日'"></datetime>
        <x-input title="押金" type="number" placeholder="" v-model="deposit"></x-input>
        <x-input title="每月租金" type="number" placeholder="" v-model="monthly_rent"></x-input>
        <x-input title="第一月租金" type="number" placeholder="" v-model="first_rent" :max="12"></x-input>
        <datetime v-model="monthly_date" @on-change="change" :title="'每月付費日期'" format="MM-DD"></datetime>
        <x-textarea :max="100" :placeholder="'附註'"></x-textarea>
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
    XInput, Group, Cell, Tabbar, TabbarItem, Datetime, XTextarea
}
from 'vux'
export default {
    components: {
        HeaderBar,
        XInput,
        Group,
        Cell,
        Tabbar,
        TabbarItem,
        Datetime,
        XTextarea
    },
    methods: {
        change(value) {
            console.log('change', value)
        },
    },
    data() {
        return {
            format: 'MM-DD',
            start_date: '2015-11-12',
            end_date: '2017-05-01',
            monthly_date: '05-01',
            Property: '透天',
            deposit: '',
            monthly_rent: '',
            first_rent: '',
            username: '',
            isAddButton: true,
        }
    }
}

</script>
