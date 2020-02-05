<template>
  <div class="fenxiao-homepage">
    <el-row>
      <el-button>点击这里注册看点直播</el-button>
    </el-row>
    <el-row>
      <el-button>点击这里成为分销</el-button>
    </el-row>
    <el-row>
      <el-input type="textarea" :rows="5" v-model="rule" resize="none" :disabled="true"></el-input>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'fenxiao',
  data () {
    return {
      rule:''
    }
  },
  methods:{
  },
  mounted () {
    let rules = {
      firstcom: 300,
      secondcom: 200,
      thirdcom: 100,
      rule: '1.分销规则一\n2.分销规则二\n3.分销规则三\n4.分销规则四'
    }
    if(!localStorage.getItem('rules')){
      localStorage.setItem('rules', JSON.stringify(rules))
    }
    if(!!localStorage.getItem('rules')){
      let data = JSON.parse(localStorage.getItem('rules'))
      this.rule = data.rule
    }
  }
}
</script>
<style>
  .fenxiao-homepage{
    padding-top: 40px;
  }
  .fenxiao-homepage button{
    width: 180px;
  }
  .fenxiao-homepage .el-row{
    margin-top: 20px;
  }
  .fenxiao-homepage .el-row:last-of-type{
    margin-top: 40px;
    padding: 40px;
  }
</style>