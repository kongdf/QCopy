<template>

  <div class="LoginBg">

    <div class="LoginCon">
      <div class="LogoBG"> <img src="../assets/kodinger.jpg" alt="" class="logo"></div>
      <p class="LoginTitle">登录到QuickCopy</p>
      <p class="LoginUserName">用户名</p>
      <p class="LoginUserNameInp">
        <el-input v-model.trim="UserName" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
      </p>
      <p class="LoginUserPWD">密码 <span v-show="false">忘记密码</span></p>
      <p class="LoginUserNameInp">
        <el-input v-model.trim="UserPWD" type="password" placeholder="请输入密码" prefix-icon=" el-icon-lock" show-password>
        </el-input>
      </p>
      <el-button type="primary" class="LoginBtn" @click="Login">登录</el-button>
      <p class="Res">还没有账号吗？<span class="Res cp" @click="ResVisible=true">注册</span></p>
      <p style="margin-top:10px;text-align: right;"><a style="color: #44a0b3;" target="blank" href="https://github.com/kongdf/quickCopy/releases">下载win/mac端</a></p>
    </div>



    <el-dialog title="注册" :visible.sync="ResVisible" custom-class='ResVisible' center width="400px">
      <div>
        <p class="LoginUserName">用户名 <span class="zh" v-show="CanRes&&ResPreson.UserName.length>4">账号可用</span><span class="zh corred"
            v-show="!CanRes">账号不可用</span> </p>
        <p class="LoginUserNameInp">
          <el-input v-model.trim="ResPreson.UserName" @input="IsUsername" placeholder="请输入5-16位字母或者数字+字母"
            prefix-icon="el-icon-user">
          </el-input>
        </p>
        <p class="LoginUserName">密码</p>
        <p class="LoginUserNameInp">
          <el-input v-model.trim="ResPreson.UserPWD" type="password" placeholder="请输入6到16位且不能输入中文"
            prefix-icon=" el-icon-lock"></el-input>
        </p>
        <p class="LoginUserName">确认密码</p>
        <p class="LoginUserNameInp">
          <el-input v-model.trim="ResPreson.UserPWD2" type="password" placeholder="请确认密码" prefix-icon=" el-icon-lock">
          </el-input>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ResVisible = false">取 消</el-button>
        <el-button type="primary" @click="ResPresonBtn">注册</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    data() {

      return {
        ResVisible: false,
        UserName: '',
        UserPWD: '',
        ResPreson: {
          UserName:'',
        },
        CanRes: true,
      }
    },
    methods: {
      Login() {

        let self = this


        if (self.UserName.length < 5) {
          self.$message.error('请输入用户名');
          return
        }
        if (self.UserPWD.length < 5) {
          self.$message.error('请输入密码');
          return
        }

        fetch('http://qc.kongdf.com:3000/users/userLogin', {
          method: 'post',
          body: JSON.stringify({
            username: self.UserName,
            pwd: self.$md5(self.UserPWD),
          }),
        }).then((res) => res.json()).then(response => {
            debugger
          if (response.StatusCode == '000000') {

            self.$message.success('登录成功');
            self.$store.state.UserInfo=response.data[0]
            sessionStorage.setItem("UserInfo", JSON.stringify(response.data[0]));
            self.$router.push({
              name: 'nav'
            })
          } else if (response.StatusCode == '100002') {
            self.$message.error('密码错误');
          }
        })
      },
      ResPresonBtn() {
        let self = this;
        if (!this.ResPreson.UserName) {
          this.$message.error('请输入合法的用户名');
          return
        }
        if (!/^[a-zA-Z0-9_]{5,16}$/.test(this.ResPreson.UserName)) {
          this.$message.error('请输入合法的用户名');
          return
        }

        if (!this.ResPreson.UserPWD) {
          this.$message.error('请输入密码');
          return
        }
        if (!/^[0-9a-zA-Z]{6,16}$/.test(this.ResPreson.UserPWD)) {
          this.$message.warning({
            message: "密码只能6到16位且不能输入中文与特殊符号"
          });
          return
        }

        if (this.ResPreson.UserPWD != this.ResPreson.UserPWD2) {
          this.$message.error('两次密码不一致');
          return
        }


        fetch('http://qc.kongdf.com:3000/users/addUserData', {
          method: 'post',
          body: JSON.stringify({
            username: self.ResPreson.UserName,
            pwd: self.$md5(self.ResPreson.UserPWD),
          }),
        }).then((res) => res.json()).then(response => {
          if (response.StatusCode == '000000') {

            self.$message.success('注册成功');
            self.ResPreson = {
              UserName:''
            }
            self.ResVisible = false
          }
        })
      },
      IsUsername() {
        let self = this
        if (this.ResPreson.UserName.length < 5) {

        } else {
          fetch('http://qc.kongdf.com:3000/users/isusername', {
            method: 'post',
            body: JSON.stringify({
              username: self.ResPreson.UserName
            }),
          }).then((res) => res.json()).then(response => {
            if (response.StatusCode == '000000') {
              if (response.Status == '1') {
                self.CanRes = false
              } else {
                self.CanRes = true
              }
            }
          })

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .LoginBg {


    .LoginCon {
      width: 300px;
      margin: 0 auto;
      padding: 48px;
      background-color: #fff;
      border-radius: 3px;
      height: 400px;
      margin-top: 120px;
      position: relative;
      box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
      color: #44a0b3;

      .LogoBG {
        width: 100px;
        height: 100px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: -50px;
        border-radius: 50%;
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
        text-align: center;

        .logo {
          width: 80px;
          height: 80px;
          padding-top: 10px;

        }
      }



      .LoginTitle {
        margin-top: 30px;
        text-align: center;
        font-size: 18px;
      }

      .LoginUserName {
        margin-top: 40px;
        font-weight: 700;

      }

      .LoginUserPWD {
        margin-top: 20px;
        font-weight: 700;

        span {
          float: right;
          font-weight: normal;
          font-size: 14px;
          margin-top: 5px;
          border-bottom: 1px dashed #44a0b3;
        }
      }

      .LoginUserNameInp {
        margin-top: 15px;
      }

      .LoginBtn {
        width: 100%;
        margin-top: 40px;
      }

      .Res {
        font-size: 14px;
        margin-top: 5px;
        text-align: center;
        margin-top: 30px;

        span {
          border-bottom: 1px dashed #44a0b3;
        }
       

      }
    }
  }
</style>

<style>
  .ResVisible .LoginUserName {
    color: #44a0b3;
    font-weight: 700;
    margin-top: 15px;
  }

  .ResVisible .LoginUserNameInp {
    margin-top: 10px;
    /* width: 300px; */
  }

  .ResVisible .LoginUserName .zh {
    float: right;
    font-weight: normal;
  }
</style>