<style >

.flex-text {
    text-align: center;
}

</style>

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/4">
                <div class="flex-text">樓層</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-text">房號</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-text">房客</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-text">到期日</div>
            </flexbox-item>
        </flexbox>
        <scroller lock-x scrollbar-y :scrollbarY="false" use-pulldown @on-pulldown-loading="load" enable-horizontal-swiping ref="scroller" :height="-145+'px'">
            <div class="box2">
                <swipeout-item v-for="room in rooms" :threshold=".5" underlay-color="#ccc">
                    <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick('tenancy',room.id)" background-color="#FFAA33">退租</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('modify',room.id)" background-color="#336DD6">修改</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('delete',room.id)" background-color="#D23934">刪除</swipeout-button>
                    </div>
                    <div slot="content" class="demo-content vux-1px-tb">
                        <cell></cell>
                        <flexbox :gutter="0" wrap="wrap">
                            <flexbox-item :span="1/4">
                                <div class="flex-text">{{room.floor}}</div>
                            </flexbox-item>
                            <flexbox-item :span="1/4">
                                <div class="flex-text">{{room.room_no}}</div>
                            </flexbox-item>
                            <flexbox-item :span="1/4">
                                <div class="flex-text">{{room.tenant}}</div>
                            </flexbox-item>
                            <flexbox-item :span="1/4">
                                <div class="flex-text">{{room.expiry_date}}</div>
                            </flexbox-item>
                        </flexbox>
                    </div>
                </swipeout-item>
            </div>
        </scroller>

    </group>
    <tabbar>
        <x-button :text="submit001" @click.native="processButton001" type="primary"></x-button>
    </tabbar>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>

</div>

</template>

<script>

import {
    Group, Swipeout, SwipeoutItem, SwipeoutButton, Cell,
    Flexbox, FlexboxItem, Scroller, Actionsheet, Tabbar, XButton
}
from 'vux'
import {
    mapState, mapActions
}
from 'vuex'
import HeaderBar from '../../components/header.vue'

export default {
    components: {
        HeaderBar,
        Cell,
        Group,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        Flexbox,
        FlexboxItem,
        Scroller,
        Actionsheet,
        Tabbar,
        XButton
    },
    computed: {
        ...mapState([
            'rooms'
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
            onButtonClick(type, id) {
                switch (type) {
                    case 'tenancy':
                        this.show = true;
                        break;
                    case 'modify':
                        this.$router.push({
                            'path': '/room/' + id
                        })
                        break;
                    case 'delete':
                        this.show1 = true;
                        break;
                    default:
                }
            },
            handleEvents(type) {
                console.log('event: ', type)
            },
            load(uuid) {
                setTimeout(() => {
                    this.$refs.scroller.donePulldown()
                }, 2000)
            },
            click(key) {
                console.log(key)
            },
            onDelete() {
                this.showSuccess = true
            },
            processButton001() {
                this.$router.push({
                    'path': '#'
                })
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
            submit001: '新增'
        }
    }
}

</script>
