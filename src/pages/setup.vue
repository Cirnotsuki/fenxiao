<template>
    <div class="fenxiao-setup">
        <el-row>
            <el-col class="fenxiao-tips" :span="10">一级代理分佣</el-col>
            <el-col :span="14">
                <el-input  v-model="firstcom" maxlength="14"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">二级代理分佣</el-col>
            <el-col :span="14">
                <el-input  v-model="secondcom" maxlength="14"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">三级代理分佣</el-col>
            <el-col :span="14">
                <el-input  v-model="thirdcom" maxlength="14"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">分销规则</el-col>
            <el-col :span="14">
                <el-input type="textarea" :rows="5" v-model="rule" resize="none"></el-input>
            </el-col>
        </el-row>
        <el-row class="fenxiao-setup-setup">
            <el-col :span="24">
                <el-button @click="save">保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:'setup',
        data () {
            return {
                firstcom:'',
                secondcom:'',
                thirdcom:'',
                rule:''
            }
        },
        methods:{
            save(e){
                localStorage.setItem('rules', JSON.stringify({
                    firstcom:this.firstcom,
                    secondcom:this.secondcom,
                    thirdcom:this.thirdcom,
                    rule:this.rule
                }))
            }
        },
        watch:{
            firstcom(s){
                s = s.toString()
                this.firstcom = s.replace(/\D/g, '')
            },
            secondcom(s){
                s = s.toString()
                this.secondcom = s.replace(/\D/g, '')
            },
            thirdcom(s){
                s = s.toString()
                this.thirdcom = s.replace(/\D/g, '')
            }
        },
        mounted () {
            if(!!localStorage.getItem('rules')){
                let data = JSON.parse(localStorage.getItem('rules'))
                for(let key in data){
                    this[key] = data[key]
                }
            }
        }
  }
</script>
<style>
    .fenxiao-setup{
        padding: 20px;
        margin-top: 100px;
    }
    .fenxiao-setup-setup{
        margin-top: 60px;
    }
    .fenxiao-setup .el-row:nth-last-of-type(2){
        margin-top: 40px;
    }
    .fenxiao-setup .el-row{
        margin-bottom: 10px;
    }
</style>