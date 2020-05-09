<template>
  <div>
    <div class="content">
      <div class="close" @click="back">
        <van-icon name="cross" />
      </div>

      <div class="pop_cont_t">
        <main class="cont_t">
          <div class="log_cont">
            <!-- 登录后 -->
            <div class="user_mess" v-if="this.$store.state.count == 0">
              <van-image class="user_pic" width="50" height="50" src round />
              <div class="user_naem">
                <span>{{user.user_name}}</span>
              </div>
            </div>
            <!-- 未登录 -->
            <div class="log">
              <h4>欢迎来来到企鹅视频</h4>

              <van-cell class="but" @click="showPopup">
                <van-button type="primary" size="small">
                  <span>登录/注册</span>
                </van-button>
              </van-cell>
            </div>
          </div>
          <div>
            <span>会员中心</span>
            <span>日期</span>
          </div>
        </main>
      </div>
    </div>
    <!-- 登录页面 -->
    <van-popup v-model="show" position="bottom" :style="{height:'50%'}" round>
      <div class="login">
        <h4>欢迎来到企鹅视频^v^ 请先登录哦~</h4>
        <!-- <van-form @submit="onSubmit"> -->
        <van-field v-model="user.username" name="用户名" label="用户名" placeholder="用户名" />
        <van-field v-model="user.password" type="password" name="密码" label="密码" placeholder="密码" />
        <van-field name="radio" label="单选框">
          <template #input>
            <van-checkbox v-model="checked">协议书</van-checkbox>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="onSubmit(user.username,user.password,checked)"
          >注册</van-button>
        </div>
        <!-- </van-form> -->
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      show: true,
      // 用户信息
      user: {
        username: "",
        password: "",
        userid: ""
      }
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    showPopup() {
      console.log(11111);
      this.show = true;
    },
    // 用户登录
    onSubmit(name, password, checked) {
      this.user.username = name;
      this.user.password = password;
      console.log(this.user.username);
      console.log(this.user.password);
      console.log(checked);
      if (this.user.username == "" || this.user.password == "") {
        this.$toast.allowMultiple();
        this.$toast('你还没输入账号或者密码呢');
        // this.$toast({message: '你还没输入账号或者密码呢'});
        // this.$toast.onOpened;
        // this.$notify({ type: 'primary',  });
      } else if(this.user.username.length > 3 ){
        console.log('太长了')
        //  this.$notify({ type: 'primary', message: '太长了' });
          //  this.$toast({message: '太长了'});
          // this.$toast.onOpened;
             this.$toast.allowMultiple();
         this.$toast('太长了');

      }
      else if (checked == false) {
         this.$toast.allowMultiple();
         this.$toast('先要同意协议才能登陆嗷');
      }else{
        console.log('成功登陆')

      }
    },
    // check(){
    //   console.log(1111)
    //   $toast("不通过协议无法登录哦");
    //    this.checked = true

    // }
  }
};
</script>
<style scoped>
.content {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}
.pop {
  display: flex;
}
.pop_cont_t {
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
}
/* 关闭遮罩层按钮样式*/
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 25px;
}
.cont_t {
  width: 100%;
  /* height: 100%; */
  padding: 15px;
  text-align: left;
}
/* 登录前的样式 */
.log_cont {
  /* height: 100%; */
  width: 100%;
  background: #ffffff;
  display: flex;
}
.log {
}
.but {
  padding: 0px;
}
/* 登录后的样式 */
.user_mess {
  /* display: flex; */
  padding: 15px 0;
  background-color: #ffffff;
}
.user_naem {
  padding: 5px 0;
}
</style>