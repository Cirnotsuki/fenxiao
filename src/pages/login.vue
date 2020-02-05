<template>
    <div class="fenxiao-login">
        <el-row>
            <el-col class="fenxiao-tips" :span="10">手机号码</el-col>
            <el-col :span="14">
                <el-input placeholder="请输入手机号码" v-model="tel" maxlength="11" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="fenxiao-tips" :span="10">密码</el-col>
            <el-col :span="14">
                <el-input placeholder="请输入密码" v-model="pwd" maxlength="32" show-password></el-input>
            </el-col>
        </el-row>
        <el-row class="fenxiao-login-option">
            <el-col :span="12">
                <router-link to="/register/"><el-button>注册</el-button></router-link>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="login">登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:'login',
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
                pwd:'',
                accounts:{}
            }
        },
        methods:{
            login(e){
                if(this.tel.length < 11){
                    this.$message({
                        type: 'warning',
                        message: `请输入手机号码`
                    })
                    return
                }
                if(this.pwd.length === 0){
                    this.$message({
                        type: 'warning',
                        message: `请输入密码`
                    })
                    return
                }
                if(!this.accounts[this.tel]){
                    this.$message({
                        type: 'error',
                        message: `手机号码或密码错误，请重试`
                    })
                    return
                }
                if( (this.accounts[this.tel].password !== this.Utils.shamdive(this.pwd))){
                    this.$message({
                        type: 'error',
                        message: `手机号码或密码错误，请重试`
                    })
                    return
                }
                // 储存 Cookie
                this.Utils.setCookie('uid', this.tel, 72000)
                this.Utils.setCookie('ck_Md5', this.Utils.shamdive(this.pwd), 72000)
                // 跳转页面
                this.$message({
                    type: 'success',
                    message: `登录成功`,
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
            if(!!localStorage.getItem('accounts')){
                this.accounts = JSON.parse(localStorage.getItem('accounts'))
            }
        }
  }
</script>
<style>
    .fenxiao-login{
        padding: 20px;
        margin-top: 100px;
    }
    .fenxiao-login-option{
        margin-top: 135px;
    }
    .fenxiao-login .el-row{
        margin-bottom: 20px;
    }
</style>