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
</style>

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group>
        <x-input title="名稱" name="house_name" placeholder="7號 雅舍小築" v-model="house_name"></x-input>
        <x-input title="詳細地址" name="address" v-model="address"></x-input>
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
            <i slot="icon" class="fa fa-plus fa-2x" aria-hidden="true" v-on:click="addButton"></i>
            <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item v-else>
            <i slot="icon" class="fa fa-wrench fa-2x" aria-hidden="true" v-on:click="modifyButton"></i>
            <span slot="label">修改</span>
        </tabbar-item>
    </tabbar>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
</div>

</template>

<script>

import HeaderBar from '../../../components/header.vue'
import {
    mapState, mapActions
}
from 'vuex'
import {
    XInput, Group, Cell, Checker, CheckerItem, Tabbar, TabbarItem, Actionsheet
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
        TabbarItem,
        Actionsheet
    },
    computed: {
        ...mapState([
            'houses',
            'houseid'
        ])
    },
    mounted() {
        this.checkHouseID()
    },
    methods: {
        checkHouseID() {
                const houseid = this.houseid
                let houseid_detail
                if (this.houseid) {
                    houseid_detail = this.houses.filter(function(currentValue, index, arr) {
                        return currentValue.id == houseid
                    })
                    if (houseid_detail) {
                        this.address = houseid_detail[0].address
                        this.house_name = houseid_detail[0].name
                        this.isAddButton = false
                    }
                }
            },
            addButton() {
                this.show1 = true;
            },
            modifyButton() {
                this.show = true;
            },
            click(key) {
                console.log(key)
            }
    },
    data() {
        return {
            Property: '透天',
            code: '',
            account: '',
            jointly: '',
            address: '',
            house_name: '',
            isAddButton: true,
            show: false,
            menus: {
                'title.noop': '你確定嗎?',
                modify: '<span style="color:red">修改</span>'
            },
            show1: false,
            menus1: {
                'title.noop': '你確定嗎?',
                add: '<span style="color:red">新增</span>'
            }
        }
    }
}

</script>
