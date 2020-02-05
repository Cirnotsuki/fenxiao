<template>
    <div class="judge-tips">{{tips}}</div>
</template>
<script>
    export default {
        name:'judge',
        head () {
        },
        data () {
            return {
                tips:'...'
            }
        },
        mounted () {
             // 获取参数
            switch(this.$route.query.type){
                case 'logout':
                    this.Utils.deleteCookie('uid')
                    this.Utils.deleteCookie('ck_Md5')
                    this.tips='正在退出登录...'
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000)
                    break 
            }
            
        }
  }
</script>
<style>
    .judge-tips{
        text-align: left;
        padding: 10px;
    }
</style>