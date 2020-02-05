<template>
    <div class="fenxiao-page">
        <div class="fenxiao-header noselect">
            <div class="option" v-if="logined"><i class="el-icon-menu" @click="menuActive = !menuActive"></i></div>
            <span>{{title}}</span>
            <!-- <div class="option"><router-link to="/"><i class="el-icon-s-home"></i></router-link></div> -->
        </div>
        <div class="fenxiao-content">
            <fenxiao v-if="$route.name === 'index'"></fenxiao>
            <router-view></router-view>
        </div>
        <pop-menu :active="menuActive" :menus="menus" @close="closeMenu"></pop-menu>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently not supported by any browser */
}
.fenxiao-header{
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #CCC;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    color: #101010;
}
.fenxiao-header .option i{
    font-size: 24px;
    line-height: 44px;
    color: #101010;
}
.fenxiao-header .option{
    position: absolute !important;
    width: 44px;
    height: 44px;
    top: 0;
}
/* .fenxiao-header .option:last-of-type{
    right: 0;
} */
.fenxiao-tips {
    text-align: left;
    line-height: 40px;
    padding-left: 20px;
}
.center-middle{
    position: absolute;
    top: 50%;
    right: 50%;
    -webkit-transform: translate(50%,-50%);
    -moz-transform: translate(50%,-50%);
    transform: translate(50%,-50%);
}
</style>
<script>
import popMenu from '@/components/popMenu.vue'
import fenxiao from '@/components/fenxiao.vue'
export default {
    name: 'index',
    components: {
        popMenu,
        fenxiao
    },
    data () {
        return {
            title:'分销项目',
            menuActive:false,
            menus:[
                { name: '申请看点直播', router:'/', icon:'el-icon-s-home' },
                { name: '代理主页', router:'/agency/', icon:'el-icon-s-cooperation' },
                { name: '代理设置', router:'/setup', icon:'el-icon-s-tools' },
                { name: '审核', router:'/verify', icon:'el-icon-s-custom' },
                { name: '分佣', router:'/subcom', icon:'el-icon-bank-card' },
                { name: '退出登录', router:'/judge?type=logout', icon:'el-icon-error' }
            ],
            logined:false
        }
    },
    methods:{
        closeMenu(){
            this.menuActive = false
        },
        loginCheck(){
            if(!this.Utils.getCookie('uid') || !this.Utils.getCookie('ck_Md5')){
                this.logined = false
            }else{
                this.logined = true
            }
        }
    },
    watch: {
        $route(to, from){
            this.title = to.meta.title
            this.loginCheck()
            this.menuActive = false
        }
    },
    mounted () {
        // 刷新标题
        this.title = document.title
        // 获取登录状态
        this.loginCheck()
        // 数据测试区域
        let roster = [
            { weixin:'wx1', tel:'13456789001', suptel:'13456788888', degree:1, verify:true },
            { weixin:'wx2', tel:'13456789002', suptel:'13456788888', degree:2, verify:false },
            { weixin:'wx3', tel:'13456789003', suptel:'13456788888', degree:3, verify:false },
            { weixin:'wx4', tel:'13456789004', suptel:'13456788888', degree:2, verify:true },
            { weixin:'wx5', tel:'13456789005', suptel:'13456788888', degree:3, verify:false },
            { weixin:'wx6', tel:'13456789006', suptel:'13456788888', degree:2, verify:false },
            { weixin:'wx7', tel:'13456789007', suptel:'13456788888', degree:1, verify:false },
            { weixin:'wx8', tel:'13456789008', suptel:'13456788888', degree:2, verify:false },
            { weixin:'wx9', tel:'13456789009', suptel:'13456788888', degree:3, verify:true },
        ]
        if(!localStorage.getItem('roster')){
            localStorage.setItem('roster', JSON.stringify(roster))
        }
    }
}
</script>