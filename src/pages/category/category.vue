<style scoped>

[class^="icon-"],
[class*=" icon-"] {
    display: inline-block;
    width: 100%;
}

span {
    font-size: 15px
}

.grid-center {
    display: block;
    text-align: center;
    color: #666;
}

.category_list {
    font-size: 0;
    padding: 10px 5px;
    text-align: center;
    box-sizing: border-box;
}

.category_list ul li {
    display: inline-block;
    width: 30%;
    height: 60px;
    margin: 0 3px 10px 3px;
}

.category_list a {
    display: block;
    line-height: 60px;
    text-align: center;
    color: #4a4a4a;
    font-size: 14px;
    border-radius: 5px;
}

.weui-grid__label:before {
    font-size: 15px;
}

</style>

<template>

<div>
    <header-bar></header-bar>
    <div>
        <group-title></group-title>
        <grid>
            <grid-item v-for="cty in categorys" @click.native="processButton(cty.url)">
                <i slot="icon" :class="cty.class_name" aria-hidden="true"></i>
                <span slot="label">{{cty.text }}</span>
            </grid-item>
        </grid>
    </div>
    <footer-bar></footer-bar>
</div>

</template>

<script>

import HeaderBar from '../../components/header.vue'
import FooterBar from '../../components/footer.vue'
import {
    Grid, GridItem, GroupTitle
}
from 'vux'

import {
    mapState, mapActions
}
from 'vuex'
export default {
    components: {
        HeaderBar,
        FooterBar,
        Grid,
        GridItem,
        GroupTitle
    },
    computed: {
        ...mapState([
            'isUserDetails'
        ])
    },
    methods: {
        processButton(url) {
            if (this.isUserDetails) {
                this.$vux.alert.show({
                    title: '提示訊息',
                    content: '請填寫詳細資料才可正常使用功能'
                })
                return
            }
            if (url) {
                this.$router.push({
                    'path': url
                })
            }
            return false;
        }
    },
    data() {
        return {
            categorys: [{
                text: '房屋',
                url: '/house/houses',
                class_name: 'fa  fa-bed fa-2x'
            }, {
                text: '房客',
                url: '',
                class_name: 'fa fa-address-card-o fa-2x'
            }, {
                text: '提醒設定',
                url: '/remind',
                class_name: 'fa fa-bullhorn fa-2x'
            }, {
                text: '註冊(測試用)',
                url: '/reg_complete',
                class_name: 'fa fa-bullhorn fa-2x'
            }]
        }
    }
}

</script>
