<!--  -->
<template>
  <div class="musicplayer">
    <div class="title">
      <i class="iconfont icon-zuobian" @click="back"></i>
      <div class="msg">
        <span class="sp1">{{ songName }}</span
        ><br /><span class="sp2">{{ songArt }}</span>
      </div>
    </div>
    <div class="cover-img">
      <img :src="songImg" alt="" width="100%" height="100%" />
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
    return {
      songId: "", //歌曲id
      songName: "", //歌曲名字
      songImg: "", //歌曲封面图
      songArt: "", //歌手
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    back() {
      //返回上一级
      this.$router.go(-1);
    },
    getMusicMsg() {
      //   const id = this.$route.query && this.$route.query.id;
      const id = 347230;
      this.$axios.get(`api/song/detail?ids=${id}`).then((res) => {
        if (res.data.code == 200) {
          this.songId = res.data.songs[0].al.id; //歌曲id
          this.songName = res.data.songs[0].al.name; //歌曲名字
          this.songImg = res.data.songs[0].al.picUrl; //歌曲封面图
          this.songArt = res.data.songs[0].ar[0].name; //歌手
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getMusicMsg();
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
<style>
.title {
  width: 100%;
  height: 70px;
}
.cover-img {
  width: 100%;
  height: 375px;
}
</style>
