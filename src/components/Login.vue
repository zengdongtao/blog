<template>
  <div class="bg">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item>
          <h2 class="el-h2">Learn to start from here</h2>
        </el-form-item>
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input type="text" v-model="ruleForm2.email" auto-complete="off"></el-input>
          </el-form-item>
        <el-form-item label="爱好:" prop="hobby">
          <el-input type="text" v-model="ruleForm2.hobby" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <router-link @click="submitForm('ruleForm2')" tag="el-button" to="/main">注册</router-link>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      var username = (rule,value,callback) => {
        if (value=="") {
          callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
      };
      var checkhobby = (rule, value, callback) => {
        if (value=="") {
          callback(new Error('爱好不能为空'));
        }else{
          callback();
        }
      };
      var checkemail = (rule, value, callback) => {
        var regEmail=/^[1-9]\d*$|^[1-9]\d*\.\d{1,2}$|^0\.\d{1,2}$/;
        if (value=="") {
          callback(new Error('邮箱不能为空'));
        }else if(regEmail.test(value)){
            callback(new Error('请输入正确的邮箱地址'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
         else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name:'',
          pass: '',
          checkPass: '',
          hobby: '',
          email:''
        },
        rules2: {
          name: [
            { validator: username, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          hobby: [
            { validator: checkhobby, trigger: 'blur' }
          ],
          email: [
            { validator: checkemail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 路由跳转
            console.log('跳转！');
            // this.$router.push({path:'/Person'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    } 
   
}
</script>

<style scoped>
 .el-form-item__label{
    text-align: left;
  }
  .bg{
    max-width: 500px;
    height: 946px;
    margin:0 auto;
  }
  #app .demo-ruleForm{
    border-radius: 4px;
    padding-top: 100px;
  }
  .el-form-item__content{
    text-align: center;
  }
  .el-h2{
    text-align: center;
  }
  [v-cloak]{
    display: none!important;
  }
  .el-button{
    background: #000;
    color:#fff;
    min-width: 122px;
  }
</style>
