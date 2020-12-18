<!--  -->
<template>
  <div>
    <van-row type="flex" justify="space-around">
      <van-col span="4"></van-col>
      <van-col span="8">
        <div class="cloudvillage">
          <van-tabs v-model="active" @click="change">
            <van-tab title="关注" name="a"></van-tab>
            <van-tab title="推荐" name="b"> </van-tab>
          </van-tabs>
        </div>
      </van-col>
      <van-col span="4"></van-col>
    </van-row>
    <van-row v-if="falg">
      <van-tabs v-model="active" swipeable>
        <van-tab title="视频"
          ><van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
            input-align="center"
            @click="videohot"
          />
          <ul class="MVs">
            <li
              v-for="item in MVList"
              :key="item.id"
              class="MV-item"
              @click="playMV(item.id)"
            >
              <img :src="item.cover" alt="" />
              <div class="MV-msg">
                <p>{{ item.name }}</p>
                <p>{{ item.artistName }}</p>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="演唱">内容 2</van-tab>
        <van-tab title="音乐安利">内容 3</van-tab>
        <!-- <van-tab title="演奏">内容 4</van-tab>
        <van-tab title="MV">内容 5</van-tab>
        <van-tab title="生活">内容 3</van-tab>
        <van-tab title="舞蹈">内容 5</van-tab>
        <van-tab title="混剪">内容 3</van-tab> -->
      </van-tabs>
    </van-row>
    <!-- <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" />
        <video :src="MVUrl"></video>
      </div>
    </van-overlay> -->
    <!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <!-- MV播放器 -->
        <video
          class="MVplayer"
          autoplay="autoplay"
          controls
          v-if="show"
          :src="MVUrl"
          z-index="1"
        ></video>
      </div>
    </van-overlay>
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
      value: "",
      falg: true,
      active: "a",
      MVList: "",
      MVUrl: "",
      show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    playMV(id) {
      //播放MV
      this.show = true;
      this.$request.get(`/mv/url?id=${id}`).then((res) => {
        this.MVUrl = res.data.data.url;
      });
    },
    getVideo() {
      //获取MV列表及信息
      this.$request.get("/mv/first").then((res) => {
        this.MVList = res.data.data;
      });
    },
    change() {
      //   console.log(this.active);
      if (this.active == "a") {
        this.falg = true;
      } else {
        this.falg = false;
      }
    },
    videohot() {
      this.$router.push("/hotsong");
      //   console.log("aaa");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getVideo();
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
#nav_gd {
  background: pink;
}
.MVs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding-bottom: 0.4rem;
}
.MV-item {
  width: 45%;
  text-align: center;
}
.MV-item p:nth-of-type(1) {
  font-size: 0.32rem;
  margin: 0.1rem 0;
}
.MV-item p:nth-of-type(2) {
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}
img {
  display: block;
  width: 3.36rem;
  height: 4rem;
  border-radius: 0.4rem;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.MVplayer {
  width: 100%;
}
</style>
