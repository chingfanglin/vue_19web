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
        <x-input title="名稱" name="username" placeholder="好好租ID" v-model="username"></x-input>
        <datetime v-model="start_date" @on-change="change" :title="'起始日'" format="YYYY/MM/DD"></datetime>
        <datetime v-model="end_date" @on-change="change" :title="'到期日'" format="YYYY/MM/DD"></datetime>
        <x-input title="押金" type="number" placeholder="" v-model="deposit"></x-input>
        <x-input title="每月租金" type="number" placeholder="" v-model="monthly_rent"></x-input>
        <x-input title="第一月租金" type="number" placeholder="" v-model="first_rent"></x-input>
        <datetime v-model="monthly_date" @on-change="change" :title="'每月付費日期'" format="DD"></datetime>
        <x-switch :title="'出租'" v-model="state" @on-change="changeButton"></x-switch>
        <x-textarea v-model="notes" :max="100" :placeholder="'附註'"></x-textarea>
    </group>

    <tabbar>
        <tabbar-item v-if="isAddButton">
            <i slot="icon" class="fa fa-plus" aria-hidden="true" v-on:click="addButton"></i>
            <span slot="label">新增</span>
        </tabbar-item>
        <tabbar-item v-else>
            <i slot="icon" class="fa fa-floppy-o" aria-hidden="true" v-on:click="saveButton"></i>
            <span slot="label">存檔</span>
        </tabbar-item>
    </tabbar>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>

    <div v-transfer-dom>
        <popup v-model="show2" height="100%">
            <div class="popup1">
                <group>
                    <x-switch title="取消退租" v-model="state" @on-change="changeButton"></x-switch>
                </group>
            </div>
        </popup>
    </div>
</div>

</template>

<script>

import HeaderBar from '../../../components/header.vue'
import {
    mapState, mapActions
}
from 'vuex'
import {
    TransferDom, Popup, XInput, Group, Cell, Tabbar, TabbarItem, Datetime, XTextarea, XSwitch, Actionsheet
}
from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        HeaderBar,
        Popup,
        XInput,
        Group,
        Cell,
        Tabbar,
        TabbarItem,
        Datetime,
        XTextarea,
        XSwitch,
        Actionsheet
    },
    computed: {
        ...mapState([
            'rooms',
            'roomid'
        ])
    },
    mounted() {
        this.checkRoomID()
    },
    methods: {
        change(value) {
                console.log('change', value)
            },
            checkRoomID() {
                const roomid = this.roomid
                let room_detail
                if (this.roomid) {
                    room_detail = this.rooms.filter(function(currentValue, index, arr) {
                        return currentValue.id == roomid
                    })
                    if (room_detail) {
                        this.username = room_detail[0].tenant
                        this.start_date = room_detail[0].start_date
                        this.end_date = room_detail[0].expiry_date
                        this.monthly_date = room_detail[0].monthly_date
                        this.deposit = room_detail[0].deposit
                        this.monthly_rent = room_detail[0].monthly_rent
                        this.first_rent = room_detail[0].first_rent
                        this.state = room_detail[0].isRent
                        this.notes = room_detail[0].notes
                        this.isAddButton = false
                    }
                }
            },
            addButton() {
                this.show1 = true;
            },
            saveButton() {
                this.show = true;
            },
            changeButton(value) {
                if (!value) {
                    this.show2 = true;
                } else {
                    this.show2 = false;
                }
            },

            click(key) {
                console.log(key)
            }
    },
    data() {
        return {
            format: 'MM-DD',
            start_date: '2015/11/12',
            end_date: '2017/05/01',
            monthly_date: '28',
            Property: '透天',
            deposit: 0,
            monthly_rent: '',
            first_rent: '',
            username: '',
            isAddButton: true,
            state: false,
            notes: '',
            show: false,
            menus: {
                'title.noop': '你確定嗎?',
                modify: '<span style="color:red">修改</span>'
            },
            show1: false,
            menus1: {
                'title.noop': '你確定嗎?',
                add: '<span style="color:red">新增</span>'
            },
            show2: false,
        }
    }
}

</script>
