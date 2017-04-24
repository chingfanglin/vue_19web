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
                        <swipeout-button @click.native="onButtonClick('delete',room.id)" background-color="#FFAA33">退租</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('fav',room.id)" background-color="#336DD6">修改</swipeout-button>
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
    <footer-bar></footer-bar>
</div>

</template>

<script>

import {
    Grid, GridItem, GroupTitle, Group, Swipeout, SwipeoutItem, SwipeoutButton, Cell,
    Flexbox, FlexboxItem, Divider, XButton, Scroller, CellBox
}
from 'vux'
import {
    mapState, mapActions
}
from 'vuex'
import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'

export default {
    components: {
        HeaderBar,
        FooterBar,
        Cell,
        Grid,
        GridItem,
        GroupTitle,
        Group,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        Flexbox,
        FlexboxItem,
        Divider,
        XButton,
        Scroller,
        CellBox
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
                this.$router.push({
                    'path': '/room/' + id
                })
            },
            handleEvents(type) {
                console.log('event: ', type)
            },
            load(uuid) {
                setTimeout(() => {
                    this.$refs.scroller.donePulldown()
                }, 2000)
            },
            data() {
                return {}
            }
    }
}

</script>
