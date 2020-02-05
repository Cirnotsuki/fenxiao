<template>
    <div class="fenxiao-verify">
        <table>
            <tr class="fenxiao-verify-head">
                <td>微信号</td>
                <td>手机号</td>
                <td>上级手机号</td>
                <td>设置</td>
            </tr>
            <tr v-for="(men, i) in roster" :key="i">
                <td>{{men.weixin}}</td>
                <td>{{men.tel}}</td>
                <td>{{men.suptel}}</td>
                <td v-if="men.verify">通过</td>
                <td v-else><el-button class="sbtn" @click="approve($event,i)">同意</el-button></td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name:'verify',
        head () {
        },
        data () {
            return {
                roster:[]
            }
        },
        methods:{
            approve(e, i){
                this.roster[i].verify = true
                localStorage.setItem('roster', JSON.stringify(this.roster))
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
.sbtn{
    padding: 4px 8px;
    color: #101010;
}
.fenxiao-verify{
    margin-top: 64px;
}
.fenxiao-verify table{
    width: 100%;
    border-spacing: 0;
}
.fenxiao-verify-head{
    margin-bottom: 10px;
}
.fenxiao-verify-head td{
    border-top: 1px solid #BBB;
    border-bottom: 1px solid #BBB;
    line-height: 50px !important;
}
.fenxiao-verify table td{
    line-height: 30px;
    font-size: 14px;
    width: 28%;
}
.fenxiao-verify table td:last-of-type{
    width: 16%;
}
</style>