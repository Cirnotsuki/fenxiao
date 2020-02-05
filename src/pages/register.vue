<template>
    <div class="fenxiao-register">
        <el-row>
            <el-col class="fenxiao-tips" :span="10">手机号码</el-col>
            <el-col :span="14">
                <el-input placeholder="请输入手机号码" v-model="tel" maxlength="11" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">上级手机</el-col>
            <el-col :span="14">
                <el-input placeholder="请输入上级手机号码" v-model="suptel" maxlength="11" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">密码</el-col>
            <el-col :span="14">
                <el-input placeholder="请输入密码" v-model="pwd" maxlength="32" show-password></el-input>
            </el-col>
        </el-row>
        <el-row class="fenxiao-register-option">
            <el-col :span="24">
                <el-button @click="register">注册</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:'register',
        head () {
            return {
                title: '代理登录',
                meta: [
                    { name: 'keywords', content: '代理登录' }
                ]
            }
        },
        data () {
            return {
                tel:'',
                suptel:'',
                pwd:''
            }
        },
        methods:{
            register(){
                if(this.tel.length < 11){
                    this.$message({
                        type: 'error',
                        message: `请输入正确的手机号码`
                    })
                    return
                }
                if(this.suptel.length < 11){
                    this.$message({
                        type: 'error',
                        message: `请输入正确的上级手机号码`
                    })
                    return
                }
                if(this.pwd.length === 0){
                    this.$message({
                        type: 'error',
                        message: `请输入密码`
                    })
                    return
                }
                let hash = {}
                if(!!localStorage.getItem('accounts')){
                    let hash = JSON.parse(localStorage.getItem('accounts'))
                }
                hash[this.tel] = {suptel: this.suptel, password: this.Utils.shamdive(this.pwd)}
                localStorage.setItem('accounts', JSON.stringify(hash))
                // 储存 Cookie
                this.Utils.setCookie('uid', this.tel, 72000)
                this.Utils.setCookie('ck_Md5', this.Utils.shamdive(this.pwd), 72000)
                // 跳转页面
                this.$message({
                    type: 'success',
                    message: `注册成功`,
                    duration:1000
                })
                setTimeout( ()=>{
                    this.$router.push('/')
                }, 1000)
            }
        },
        watch:{
            tel(s){
                this.tel = s.replace(/\D/g, '')
            }
        },
        mounted () {
        }
  }
</script>
<style>
    .fenxiao-register{
        padding: 20px;
        margin-top: 100px;
    }
    .fenxiao-register-option{
        margin-top: 100px;
    }
    .fenxiao-register .el-row:first-of-type{
        margin-bottom: 40px;
    }
    .fenxiao-register .el-row{
        margin-bottom: 10px;
    }
</style>