<!--  -->
<template>
  <div class="pt" style="margin-top: 50px">
    登录

    <van-cell-group>
      <!-- <van-field
    v-model="username"
    error
    required
    label="用户名"
    placeholder="请输入用户名"
  /> -->
      <van-field
        required
        label="手机号"
        placeholder="请输入手机号"
        @blur="phonenumber"
        v-model="tel"
      />
      <van-field v-model="password" type="password" label="密码" />
      <!-- <van-number-keyboard
        :show="show"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        v-model="numtxt"
      /> -->

      <van-row type="flex" justify="center" style="margin-top:10px">
        <van-col span="6">
          <van-button round type="info" @click="tologin">一键登录</van-button>
        </van-col>
      </van-row>
      <span class="tiao">
        <router-link to="/photo">更多登陆方式</router-link>
      </span>
    </van-cell-group>
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
      // value: "",
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
    getcode() {
      if (this.pass != "") {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    phonenumber() {
      let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (reg.test(this.tel)) {
        Toast("输入成功");
      } else {
        Toast("请输入正确的手机格式");
      }
    },
    tologin() {
      this.$axios
        .get(`api/login/cellphone?phone=${this.tel}&password=${this.password}`)
        .then((res) => {
          console.log(res, "11111");
          if (res.data.code == 502) {
            Toast("请输入正确的密码");
          } else {
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

    // onInput(value) {
    //   this.phone += value;
    //   // this.vercode+=value
    // },
    // onDelete() {
    //   let value = this.phone.split("");
    //   value.pop();
    //   this.phone = value.join("");
    // },
    // telsumb() {
    //   this.show = true;
    // },
    // codesumb(){
    // }
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
.tiao {
  display: block;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 8px;
}
</style>
