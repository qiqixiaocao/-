<!--  -->
<template>
  <div class="userinfo">
    注册
    <van-field
        required
        label="手机号"
        placeholder="请输入手机号"
        @blur="zcphonenumber"
        v-model="zctel"
      />
      <van-field v-model="zcpassword" type="txt" label="密码" />
      <van-cell-group>
  <van-field v-model="zcvalue" label="用户名" placeholder="请输入用户名" />
</van-cell-group>
      

      <van-row type="flex" justify="center">
        <van-col span="6">
          <van-button round type="info" @click="tologin" style="width:100px">注册  </van-button>
        </van-col>
      </van-row>

  </div>
</template>

<script>

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Vue from 'vue';
import { Field,Toast } from 'vant';
Vue.use(Field);

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
       show: false,
      // phone: "",
      // numtxt: "",
      // value: "",
      zctel: "",
      zcpassword: "",
      zcvalue: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
     zcphonenumber() {
      let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
      if (reg.test(this.tel)) {
        Toast("输入成功");
      } else {
        Toast("请输入正确的手机格式");
      }
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
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
