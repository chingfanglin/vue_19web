<style >

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
        <x-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></x-button>
    </tabbar>
</div>

</template>

<script>

import HeaderBar from '../../components/header.vue'
import {
    XInput, Group, XButton, Cell, Checker, CheckerItem, Tabbar
}
from 'vux'
export default {
    components: {
        HeaderBar,
        XInput,
        Group,
        XButton,
        Cell,
        Checker,
        CheckerItem,
        Tabbar
    },
    methods: {
        change(value) {
                console.log('change:', value)
            },
            processButton001() {
                this.submit001 = 'processing'
                this.disable001 = true

                this.$vux.loading.show({
                    text: 'Loading'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.submit001 = '修改'
                    this.disable001 = false
                }, 1000)
            }
    },
    data() {
        return {
            Property: '透天',
            code: '',
            account: '',
            jointly: '',
            submit001: '修改',
            disable001: false
        }
    }
}

</script>
