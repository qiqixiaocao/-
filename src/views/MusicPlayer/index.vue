<!--  -->
<template>
  <div class="musicplayer">
    <van-nav-bar
      :title="Songtitle"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <audio :src="audiourl" autoplay controls="controls"></audio>
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
    return {
      audiourl: "",
      Songtitle: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("分享");
    },
    getmusicUrl() {
      // console.log(this.$route);
      if (this.$route.query.id) {
        this.$axios
          .get("api/song/url?id=" + this.$route.query.id)
          .then((res) => {
            // console.log(res.data, "123");
            this.audiourl = res.data.data[0].url;
            this.Songtitle = res.data.data[0];
            this.Songtitle = this.$route.query.songname;
          });
        this.$axios
          .get("api/song/detail?ids=" + this.$route.query.id)
          .then((res) => {
            res;
            // console.log(res, "歌曲详情", res.data.songs[0].name);
          });
      }
      // song/detail
      // console.log(this.$route.query);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getmusicUrl();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},

  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
