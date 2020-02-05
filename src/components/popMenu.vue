<template>
  <div class="fenxiao-menu noselect" @touchmove.prevent>
    <div class="fenxiao-menu-cover" v-if="active" @click="close"></div>
    <div class="fenxiao-menu-box" :style="{'left': `${active?0:-100}%`}">
      <div class="fenxiao-menu-header">
        <span>页面导航</span>
        <i class="el-icon-arrow-left" @click="close"></i>
      </div>
      <div class="fenxiao-router">
        <div v-for="(menu, i) in menus" :key="i" @click="router($event, menu.router)">
          <i :class="menu.icon" v-if="!!menu.icon"></i><span>{{menu.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popMenu',
  data () {
    return {
      
    }
  },
  props: {
    active: {
        type: Boolean,
        defalut: false
    },
    menus:{
      type: Object,
      default: [ { name: '主页', router:'/', icon:'el-icon-s-home' } ]
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    router(e, path){
      this.close()
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fenxiao-menu-cover{
        position: fixed;
        background-color: rgba(0,0,0,.6);
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 300;
    }
    .fenxiao-menu .fenxiao-menu-box{
      position: fixed;
      background-color: #FFF;
      top: 0;
      left: -70%;
      width: 70%;
      height: 100%;
      transition: all .3s;
      z-index: 301;

    }
    .fenxiao-menu .fenxiao-menu-box .fenxiao-menu-header{
      position: relative;
      height: 44px;
      border-bottom: 1px solid #CCC;
      text-align: center;
      line-height: 44px;
      font-size: 18px;

    }
    .fenxiao-menu .fenxiao-menu-box .fenxiao-menu-header i{
      position: absolute;
      line-height: 44px;
      font-size: 24px;
      padding: 0 12px;
      right: 0;
    }
    .fenxiao-menu .fenxiao-menu-box .fenxiao-router i{
      margin-right: 10px;
    }
    .fenxiao-menu .fenxiao-menu-box .fenxiao-router div{
      color: #2c3e50;
      text-decoration: none;
      display: block;
      text-align: left;
      line-height: 40px;
      font-size: 16px;
      padding: 10px;
    }
    .fenxiao-menu .fenxiao-menu-box .fenxiao-router div:hover{
      background-color: #EEE;
    }
</style>
