<template>
    <div class="fenxiao-agency">
        <table>
            <tr class="fenxiao-agency-head">
                <td>微信号</td>
                <td>手机号</td>
                <td>上级手机号</td>
                <td>状态</td>
            </tr>
            <tr v-for="(men, i) in roster" :key="i">
                <td>{{men.weixin}}</td>
                <td>{{men.tel}}</td>
                <td>{{men.suptel}}</td>
                <td>{{men.verify?'通过':'待审'}} <div class="fenxiao-agency-option" @click="option($event,i)"></div></td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name:'agency',
        head () {
        },
        data () {
            return {
                roster:[]
            }
        },
        methods:{
            option(e,i){
                this.$notify({
                    duration:2000,
                    position: 'bottom-left',
                    message: `这个是 ${this.roster[i].weixin} 的选项。`
                });   
            }
        },
        mounted () {
            if(!!localStorage.getItem('roster')){
                this.roster = JSON.parse(localStorage.getItem('roster'))
            }
        }
  }
</script>
<style>
.fenxiao-agency{
    margin-top: 64px;
}
.fenxiao-agency table{
    width: 100%;
    border-spacing: 0;
}
.fenxiao-agency-head{
    margin-bottom: 10px;
}
.fenxiao-agency-head td{
    border-top: 1px solid #BBB;
    border-bottom: 1px solid #BBB;
    line-height: 50px !important;
}
.fenxiao-agency table td{
    line-height: 30px;
    font-size: 14px;
    width: 28%;
}
.fenxiao-agency table td:last-of-type{
    position: relative;
    width: 16%;
}
.fenxiao-agency-option{
    position: absolute !important;
    width: 10px;
    height: 10px;
    right: 6px;
    bottom: 0;
    background-color: #FFF;
    border: 1px solid #BBB;
    border-radius: 50%;

}
</style>