<!--  -->
<template>
  <div class="mine">
    <van-nav-bar style="padding:none">
      <template #left>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          name="gengduo1"
          style="border-bootom:0"
        />
      </template>
    </van-nav-bar>
    <div style="height:104px;">
      <van-card
        style="float:left;width:85%;border:none"
        title="神秘糖果店老板娘 "
        thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=10859372,2077425287&fm=26&gp=0.jpg"
      >
        <template #bottom>
          <van-tag plain type="danger">云音乐VIP 续费></van-tag>
          &nbsp;
          <van-tag plain type="danger">Lv.8</van-tag>
        </template>
      </van-card>
      <van-nav-bar
        right-arrow
        style="float:left;width:15%;height:100%;background:#fafafa;"
      >
        <template #right>
          <van-icon name="arrow" size="18" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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

// @font-weight-bold:800;

.van-nav-bar__right {
  line-height: 104px;
  text-align: center;
}
</style>
