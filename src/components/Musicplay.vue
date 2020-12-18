<!--  -->
<template>
  <div class="play">
    <aplayer :audio="audio" :lrcType="1" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import aplayer from "vue-aplayer";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { aplayer },
  props: {
    music: Object,
    id: String,
  },
  async mounted() {
    //async   await 异步加载，先加载出player再使用
    let aplayer = await this.$refs.player.control;
    aplayer.play();
  },
  data() {
    return {
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: "",
        lrc: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getmusicUrl() {
      this.$request.get("/song/url?id=" + this.id).then((res) => {
        this.audio.url = res.data.data[0].url;
        this.Songtitle = this.$route.query.name;
        this.audio.name = this.$route.query.name;
        this.$request.get("/lyric?id=" + this.id).then((res) => {
          this.audio.lrc = res.data.lrc.lyric;
        });
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getmusicUrl();
  },
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
