<template>
  <div class="photo" style="margin-top: 1rem">
    <van-cell-group>
      <van-field
        required
        label="手机号"
        placeholder="请输入手机号"
        @blur="phonenumber"
        v-model="tel"
      />
      <van-field
        center
        v-model="pass"
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        @input="getcode"
      >
        <template #button>
          <van-button size="small" type="primary" @click="code"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <van-field v-model="password" type="password" label="密码" />
      <van-row type="flex" justify="center" style="margin-top:0.2rem">
        <van-col span="6">
          <van-button
            round
            type="info"
            @click="tologin"
            :disabled="flag ? false : true"
            >一键登录</van-button
          >
        </van-col>
      </van-row>
      <span class="tiao">
        <router-link to="/login">账号密码登录</router-link>
      </span>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Toast } from "vant";
Vue.use(Field);
export default {
  data() {
    return {
      tel: "",
      flag: false,
      pass: "",
      password: "",
      name: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    getname() {
      this.name = JSON.parse(localStorage.getItem("username"));
    },
    code() {
      var that = this;
      this.$axios.get(`/api/captcha/sent?phone=${that.tel}`).then((res) => {
        console.log(res);
      });
    },
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
      var that = this;
      this.$axios
        .get(
          `/api/register/cellphone?phone=${that.tel}&password=${that.password}&captcha=${that.pass}`
        )
        .then((res) => {
          console.log(res, "11111");
          if (res.data.code == 502) {
            Toast("请输入正确的密码");
          } else {
            this.$router.push("/index");
          }
          window.localStorage.setItem("userId", res.data.profile.userId);
          window.localStorage.setItem("cookie", res.data.cookie);
        });
    },
  },
  created() {
    this.getname();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
.tiao {
  display: block;
  text-align: center;
  margin-bottom: 0.04rem;
  margin-top: 0.04rem;
}
</style>
