<template>
  <div>
    <div class="vux-demo">

      <h1> </h1>
       <swiper :list="list" auto></swiper>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Flexbox, FlexboxItem, Swiper } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Swiper
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      list: [{
        url: '',
        img: 'http://bnetcmsus-a.akamaihd.net/cms/blog_header/2w/2WL7MUP3U5PZ1415366807507.jpg',
        title: ''
      }, {
        url: '',
        img: 'https://s.pacn.ws/gallery/large/GA.04613.0001.jpg',
        title: ''
      }, {
        url: '',
        img: 'http://gamer.vjmedia.com.hk/wp-content/uploads/2016/11/Zelda-4-900x506.jpg',
        title: ''
      }]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
