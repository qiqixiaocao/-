<!--  -->
<template>
  <div class="play">
    <aplayer autoplay mutex :music="musicList" onPlay> </aplayer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import aplayer from "vue-aplayer";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { aplayer },
  props: {
    id: String,
  },
  data() {
    return {
      musicList: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getmusicUrl() {
      console.log(this.id, "id");

      if (this.id) {
        this.$axios.get("api/song/url?id=" + this.id).then((res) => {
          this.musicList = {
            artist: this.$route.query.singname,
            title: this.$route.query.songname,
            src: res.data.data[0].url,
          };
          this.$axios.get("api/song/detail?ids=" + this.id).then((res1) => {
            this.musicList.pic = res1.data.songs[0].al.picUrl;
            console.log(res1, "456798");
            this.$axios.get("api/lyric?id=" + this.id).then((res2) => {
              this.musicList.lrc = res2.data.lrc.lyric;
              console.log(res2, "111111111");
            });
          });
          console.log(res.data, this.musicList, "13");
        });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getmusicUrl();
  },
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
