<!--  -->
<template>
  <div class="musicplayer">
    <div style="padding: 10px 0">
      <van-nav-bar
        :title="Songtitle"
        left-text="返回"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <Aplayer :id="id"></Aplayer>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block"><img :src="Img" /></div>
      </div>
    </van-overlay>
    <!-- <van-dialog v-model="show" show-cancel-button> </van-dialog> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Aplayer from "../../components/Musicplay.vue";
import Img from "../../assets/img/2.jpg";
/* import { Dialog } from "vant"; */
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Aplayer,
  },

  data() {
    //这里存放数据
    return {
      msg: "text",
      musicList: {},
      Songtitle: "",
      id: "",
      show: true,
      Img: Img,
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
      this.$request.get("/song/url?id=" + this.id).then((res) => {
        this.Songtitle = this.$route.query.songname;
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.query.id;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getmusicUrl();

    this.Songtitle = this.$route.query.songname;
  },
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 70px;
}
.cover-img {
  width: 100%;
  height: 375px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 320px;
  height: 320px;
  text-align: center;
  background-color: transparent;
}
img {
  width: 300px;
  height: 300px;
}
</style>
