<!--  -->
<template>
  <div class="play">
    <!-- <aplayer autoplay mutex :music="musicList" onPlay> </aplayer> -->
    <aplayer :audio="audio" :lrcType="1" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    id: String,
  },
  data() {
    return {
      // audio: {},
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
      // if (this.id) {
      //   this.$request.get(`/song/url?id=${this.id}`).then((res) => {
      //     this.audio = {
      //       artist: this.$route.query.name,
      //       name: this.$route.query.val,
      //       url: res.data.data[0].url,
      //     };
      //     this.$request.get(`/song/detail?ids=${this.id}`).then((res1) => {
      //       this.musicList.cover = res1.data.songs[0].al.picUrl;
      //       // console.log(res1, "456798");
      //       this.$request.get(`/lyric?id=${this.id}`).then((res2) => {
      //         this.musicList.lrc = res2.data.lrc.lyric;
      //         //   console.log(res2, "111111111");
      //       });
      //     });
      //     //   console.log(res.data, this.musicList, "13");
      //   });
      // }
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
