<style >

.flex-text {
    text-align: center;
}

</style>

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <scroller lock-x scrollbar-y :scrollbarY="false" use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-115+'px'">
            <div class="box2">
                <checklist v-if="isDel" :title="'確認刪除後無法還原'" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>
                <div v-else v-for="room in rooms" v-on:click="linkButton(room.id)">
                    <cell :title="'房客:'+room.tenant+'    樓層:'+room.floor+'   房號:'+room.room_no" :inline-desc="'租用期:   '+room.start_date+'~'+room.expiry_date" :link="'/roomdetail/'+room.id">
                        <span v-if="room.tenant">出租中</span>
                        <span v-else>無人租用</span>
                    </cell>
                </div>
            </div>
        </scroller>
    </group>
    <tabbar v-if="isDel">
        <tabbar-item v-if="isDel">
            <i slot="icon" class="fa fa-reply fa-4x" aria-hidden="true" v-on:click="cancelButton"></i>
            <span slot="label">取消</span>
        </tabbar-item>
        <tabbar-item>
            <i slot="icon" class="fa fa-times fa-4x" aria-hidden="true" v-on:click="checkDel"></i>
            <span slot="label">刪除房間</span>
        </tabbar-item>
    </tabbar>
    <tabbar v-else>
        <tabbar-item>
            <i slot="icon" class="fa fa-plus fa-4x" aria-hidden="true" v-on:click="addButton"></i>
            <span slot="label">新增房間</span>
        </tabbar-item>
        <tabbar-item>
            <i slot="icon" class="fa fa-times fa-4x" aria-hidden="true" v-on:click="delButton"></i>
            <span slot="label">刪除房間</span>
        </tabbar-item>
        <tabbar-item>
            <i slot="icon" class="fa fa-cog fa-4x" aria-hidden="true" v-on:click="settingButton"></i>
            <span slot="label">房屋設定</span>
        </tabbar-item>
    </tabbar>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
</div>

</template>

<script>

import {
    Group, Swipeout, Cell, Scroller, Actionsheet, Tabbar, TabbarItem, XButton, Checklist
}
from 'vux'
import {
    mapState, mapActions
}
from 'vuex'
import HeaderBar from '../../../components/header.vue'

export default {
    components: {
        HeaderBar,
        Cell,
        Group,
        Swipeout,
        Scroller,
        Actionsheet,
        XButton,
        Tabbar,
        TabbarItem,
        Checklist
    },
    computed: {
        ...mapState([
            'rooms',
            'roomid'
        ])
    },
    mounted() {
        this.getRooms(),
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
    },
    methods: {
        ...mapActions(['getRooms']),

            load(uuid) {
                setTimeout(() => {
                    this.$refs.scroller.donePulldown()
                }, 2000)
            },
            linkButton(roomid) {
                this.roomid = roomid
            },
            click(key) {
                console.log(key)
            },
            onDelete() {
                this.showSuccess = true
            },
            addButton(house_id) {
                this.$router.push({
                    'path': '/roomdetail'
                })
            },
            settingButton() {
                this.$router.push({
                    'path': '/house/housedetail'
                })
            },
            checkDel() {
                this.show1 = true;
            },
            cancelButton() {
                this.isDel = false
            },
            delButton() {
                const rooms = this.rooms
                this.objectList = [];
                let data
                for (var k in rooms) {
                    data = {
                        key: rooms[k].id,
                        value: '樓層:' + rooms[k].floor + '房號:' + rooms[k].room_no
                    }
                    this.objectList.push(data)
                }
                this.isDel = true
            },
            change(val) {
                console.log('change', val)
            }
    },
    data() {
        return {
            show: false,
            menus: {
                'title.noop': '你確定嗎?<br/><span style="color:#666;font-size:12px;">退租後無法再撤銷.</span>',
                tenancy: '<span style="color:red">退租</span>'
            },
            show1: false,
            menus1: {
                'title.noop': '你確定嗎?<br/><span style="color:#666;font-size:12px;">刪除後無法再撤銷.</span>',
                delete: '<span style="color:red">刪除</span>'
            },
            isDel: false,
            objectList: [],
            objectListValue: [],
        }
    }
}

</script>
