<!--  -->
<template>
  <div class="cover">
    <div class="main">
      <van-field
        required
        label="手机号"
        placeholder="请输入手机号"
        @blur="phonenumber"
        v-model="tel"
      />
      <van-field
        ref="pwd"
        style="margin-top: 0.3rem; position: relative"
        required
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
      <i class="iconfont icon-llshakeabouticon" @click="showPwd"></i>
      <van-button
        style="margin-top: 0.3rem"
        round
        plain
        type="danger"
        @click="tologin"
        block
        :disabled="this.tel && this.password ? false : true"
        >登录</van-button
      >
      <van-button
        round
        plain
        type="danger"
        @click="tofind"
        block
        style="margin-top: 0.3rem"
        >游客登录</van-button
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Toast } from "vant";
// import { Toast } from "vant";
Vue.use(Field);
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      show: false,
      phone: "",
      numtxt: "",
      tel: "",
      password: "",
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showPwd() {
      this.$refs.pwd.type = "text";
    },
    phonenumber() {
      let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (!reg.test(this.tel)) {
        Toast.fail({ message: "输入的手机格式有误", duration: 2000 });
        this.tel = "";
      }
    },
    tofind() {
      this.$router.push("/index");
    },
    tologin() {
      this.$request
        .get(`/login/cellphone?phone=${this.tel}&password=${this.password}`)
        .then((res) => {
          //   console.log(res, "11111");
          if (res.data.code == 502) {
            Toast.fail({ message: "输入的密码有误", duration: 2000 });
            this.password = "";
          } else {
            Toast.success({ message: "登录成功", duration: 2000 });
            this.$router.push("/index");
          }
          window.localStorage.setItem("userId", res.data.profile.userId);
          window.localStorage.setItem("cookie", res.data.cookie);
          localStorage.setItem(
            "username",
            JSON.stringify(res.data.profile.nickname)
          );

          console.log(res.data.profile.userId, "22222");
        });
      // console.log(this.tel,"111111");
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.cover {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: url("../../assets/img/wangyi-cover.jpeg") center/cover;
}
.main {
  position: fixed;
  left: 5%;
  bottom: 20%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;
}
.icon-llshakeabouticon {
  position: absolute;
  right: 3%;
  top: 32%;
  font-size: 0.4rem;
}
</style>
