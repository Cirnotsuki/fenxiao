<template>
    <div class="fenxiao-subcom">
        <table>
            <tr class="fenxiao-subcom-head">
                <td>微信号</td>
                <td>手机号</td>
                <td>代理层级</td>
                <td>佣金</td>
            </tr>
            <tr v-for="(men, i) in roster" :key="i" v-show="men.verify">
                <td>{{men.weixin}}</td>
                <td>{{men.tel}}</td>
                <td>{{men.degree}}</td>
                <td>{{getcom(men.degree)}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name:'subcom',
        head () {
        },
        data () {
            return {
                subcom:{},
                roster:[]
            }
        },
        methods:{
            getcom(d){
                switch(d){
                    case 1:
                        return this.subcom.firstcom
                        break
                    case 2:
                        return this.subcom.secondcom
                        break
                    case 3:
                        return this.subcom.thirdcom
                        break
                }
            }
        },
        mounted () {
            if(!!localStorage.getItem('rules')){
                let data = JSON.parse(localStorage.getItem('rules'))
                for(let key in data){
                    this.subcom[key] = data[key]
                }
            }
            if(!!localStorage.getItem('roster')){
                this.roster = JSON.parse(localStorage.getItem('roster'))
            }
        }
  }
</script>
<style>
.fenxiao-subcom{
    margin-top: 64px;
}
.fenxiao-subcom table{
    width: 100%;
    border-spacing: 0;
}
.fenxiao-subcom-head{
    margin-bottom: 10px;
}
.fenxiao-subcom-head td{
    border-top: 1px solid #BBB;
    border-bottom: 1px solid #BBB;
    line-height: 50px !important;
}
.fenxiao-subcom table td{
    line-height: 30px;
    font-size: 14px;
    width: 28%;
}
.fenxiao-subcom table td:last-of-type{
    width: 16%;
}
</style>