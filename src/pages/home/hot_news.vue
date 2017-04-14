<template>
  <ul id="example-1">
    <li class="news-item" v-for="item in items">
     <cell :border-intent="false" :title="item.message" class="sub-item">
     </cell>
    </li>
  </ul>
</template>

<script>
import { Group, Cell, CellBox } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellBox
  },
  data () {
    return {
      items: [
        { message: 'Teaching Machines to Draw',
          score: 1
        },
        { message: 'A quick start guide to Commodore 64...',
          score: 2
        },
        { message: 'GDNative Is Here',
          score: 3
        },
        { message: 'GDNative Is Here',
          score: 4
        },
        { message: 'GDNative Is Here',
          score: 5
        }
      ]
    }
  }
}
</script>

<style scoped>
.news-item
{
  background-color: #fff;
  padding :20px 20px 20px 20px;
  border-bottom :1px solid #eee;
  position: relative;
  line-height :0;
}

.score{
    color: #ff6600;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }
</style>
