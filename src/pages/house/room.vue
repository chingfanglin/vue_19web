

<template>

<div>
    <header-bar :showBackButton="true"></header-bar>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/4">
                <div class="flex-demo">樓層</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-demo">房號</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-demo">房客</div>
            </flexbox-item>
            <flexbox-item :span="1/4">
                <div class="flex-demo">到期日</div>
            </flexbox-item>
        </flexbox>
        <swipeout-item :threshold=".5" underlay-color="#ccc">
            <div slot="right-menu">
                <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">退租</swipeout-button>
                <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">修改</swipeout-button>
                <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">刪除</swipeout-button>
            </div>

            <div slot="content" class="demo-content vux-1px-tb">
                <cell></cell>
                <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">1</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">1</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">林書豪</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">2017/11/4</div>
                    </flexbox-item>
                </flexbox>
            </div>
        </swipeout-item>

        <swipeout-item :threshold=".5" underlay-color="#ccc">
            <div slot="right-menu">
                <swipeout-button @click.native="onButtonClick('delete')" background-color="#FFAA33">退租</swipeout-button>
                <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">修改</swipeout-button>
                <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">刪除</swipeout-button>
            </div>
            <div slot="content" class="demo-content vux-1px-tb">
                <cell></cell>
                <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">1</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">2</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">川普</div>
                    </flexbox-item>
                    <flexbox-item :span="1/4">
                        <div class="flex-demo">2017/12/4</div>
                    </flexbox-item>
                </flexbox>
            </div>
        </swipeout-item>
    </group>
    <footer-bar></footer-bar>
</div>

</template>

<script>

import {
    Grid, GridItem, GroupTitle, Group, Swipeout, SwipeoutItem, SwipeoutButton, Cell,
    Flexbox, FlexboxItem, Divider, XButton
}
from 'vux'
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
        XButton
    },
    methods: {
        onButtonClick(type) {
                alert('on button click ' + type)
            },
            handleEvents(type) {
                console.log('event: ', type)
            }
    },
    data() {
        return {

        }
    }
}

</script>
