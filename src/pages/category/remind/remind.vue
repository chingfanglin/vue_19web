

<template>

<div style="test">
    <header-bar :showBackButton="true"></header-bar>
    <group>
        <x-number v-model="roundValue1" :title="'租約到期前提醒房客'" fillable></x-number>
        <x-textarea :title="'提醒內容'" :max="200" :placeholder="content1"></x-textarea>
    </group>
    <group>
        <x-number v-model="roundValue2" :title="'房租到期前提醒房客'" fillable></x-number>
        <x-textarea :title="'提醒內容'" :max="200" :placeholder="content2"></x-textarea>
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
    XNumber, XTextarea, Group, Tabbar, TabbarItem
}
from 'vux'
import HeaderBar from '../../../components/header.vue'

export default {
    components: {
        HeaderBar,
        Group,
        XNumber,
        XTextarea,
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
            title: "設定",
            roundValue1: 60,
            roundValue2: 7,
            content1: "親愛的XXX先生/小姐,您的租約將在XXXX/XX/XX 到期,如要續約請與房東聯絡",
            content2: "親愛的XXX先生/小姐,提醒您,您的房租繳交日為 XXXX/XX/XX"
        }
    }
}

</script>
