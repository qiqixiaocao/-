<!--  -->
<template>
  <div class="index">
    <div class="seach">
      <van-icon
        class="iconfont box"
        @click="showPopup"
        class-prefix="icon"
        name="gengduo1"
      />

      <!-- 左侧弹出框-我的页面（头部） -->
      <van-popup
        v-model="show"
        position="left"
        :style="{
          height: '100%',
          width: '80%',
          background: 'rgb(245, 245, 245)',
        }"
      >
        云贝中心，创作者中心
        <div style="background: #fff; height: 30px">
          <span class="custom-title" style="float: left; width: 10%">
            <img
              style="border-radius: 50%; display: inline-block; width: 80%"
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=235780017,2460906050&fm=26&gp=0.jpg"
              alt=""
            />&nbsp;
          </span>
          <div
            style="
              float: left;
              width: 80%;
              height: 30px;
              line-height: 30px;
              margin-left: 5px;
            "
          >
            <span
              style="
                width: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
              >神秘糖果店老板娘&nbsp;></span
            >
            <van-icon
              name="scan"
              class="search-icon"
              style="font-size: 20px; float: right"
            />
          </div>
        </div>

        <div style="background: #fff">
          <van-nav-bar title="标题" left-text="我的消息" left-arrow>
            <template #right>
              <van-icon name="search" size="18" />
            </template>
          </van-nav-bar>
        </div>
      </van-popup>
      <!-- 左侧弹出框-我的页面（尾部） -->

      <van-search
        shape="round"
        background="rgb(245, 245, 245)"
        placeholder="请输入搜索关键词"
        style="float: left; width: 88%"
      />
      <van-icon
        class="iconfont"
        class-prefix="icon"
        name="luyin"
        style="border-bootom: 0; float: left; line-height: 54px"
      />
    </div>

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" style="height: 100%" :height="145">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imageUrl" style="margin: 0 20px" />
      </van-swipe-item>
    </van-swipe>
    <!-- 每日推荐图标 -->
    <div style="display: flex; text-align: center; background: #fff; overflow-x: scroll">
      <dl style="width: 15%; margin: 10px" v-for="item in icons" :key="item.id">
        <dt style="background: rgb(253, 120, 119); border-radius: 50%; margin: 10px 0">
          <img :src="item.iconUrl" alt="" style="width: 80%; height: 80%" />
        </dt>
        <dt
          v-text="item.name"
          style="
            font-size: 14px;
            width: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        ></dt>
      </dl>
    </div>

    <van-divider style="margin: 0" />

    <!-- 推荐歌单 -->
    <div class="recommed">
      <div style="height: 45px; margin: 0 15px -10px 15px">
        <h2 style="float: left; width: 150px">推荐歌单</h2>
        <van-button type="primary" to="index" class="more">更多 ></van-button>
      </div>
      <div
        style="
          height: 350px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        "
      >
        <van-grid
          :gutter="5"
          icon-size="50px"
          column-num="3"
          :border="false"
          style="padding: 0; height: 300px"
        >
          <van-grid-item v-for="item in tuipics" :key="item.id">
            <van-image radius="15" :src="item.picUrl" />
            <p
              v-text="item.name"
              style="
                width: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
            ></p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 私人定制  精选华语金曲 select-->

    <div
      style="background-color: #fff; border-radius: 20px; padding: 10px 0; margin: 10px 0"
    >
      <p style="color: #aaa; margin: 0 15px">私人定制</p>
      <div style="height: 45px; margin: 0 15px">
        <h2 style="float: left; width: 250px">好听的华语歌曲精选</h2>
        <van-button type="primary" to="index" class="more">播放 ></van-button>
      </div>
      <div style="margin: 0 10px">
        <van-cell v-for="item in selforpic" :key="item.id">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title" style="float: left">
              <img :src="item.picUrl" alt="" />
            </span>
            <p>
              <span style="font-size: 18px" v-text="item.name"></span>
              <span
                style="color: #aaa; margin: 0 15px"
                v-text="item.song.album.artists[0].name"
              ></span>
            </p>
            <p style="color: orange">超71%人播放</p>
          </template>
        </van-cell>
      </div>
    </div>
    <!-- 音乐日历 -->

    <!-- 专属场景歌单 -->

    <!-- 语音直播 -->

    <!-- 新歌 -->

    <!-- 排行榜 -->
    <div
      style="background-color: #fff; border-radius: 20px; padding: 10px 0; margin: 10px 0"
    >
      <div style="height: 45px; margin: 0 15px">
        <h2 style="float: left; width: 150px">排行榜</h2>
        <van-button type="primary" to="index" class="more">更多 ></van-button>
      </div>
      <div style="margin: 0 12px; height: 215px">
        <div
          style="
            width: 95%;
            padding: 10px 0 0 12px;
            box-shadow: #ddd 0px 0px 1px 1px;
            border-radius: 10px;
          "
        >
          <h3 style="text-align: center; padding-bottom: 8px">
            硬地原创音乐榜
            <span style="color: #bbb; font-weight: 400">></span>
          </h3>
          <van-cell
            v-for="item in rowforpic"
            :key="item.id"
            style="padding: 0;width:20rem;height:55px:line-height55px;"
          >
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title" style="float: left">
                <img :src="item.picUrl" alt="" />&nbsp;
              </span>
              <p style="padding: 15px 10px 0 0; width: 20rem">
                <span style="font-size: 18px" v-text="item.name"></span>
                <span
                  style="color: #aaa; padding-left: 10px"
                  v-text="item.song.album.artists[0].name"
                ></span>
                <span style="color: green; float: right">新</span>
              </p>
            </template>
          </van-cell>
        </div>
      </div>
    </div>

    <!-- 24小时播客 -->

    <!-- 云村KTV -->

    <!-- 播客合辑 -->

    <!-- 视频合辑 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//例如：import Model1 from "../../components/common/model1";
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);

export default {
  data() {
    //这里存放数据
    return {
      show: false,
      images: [],
      icons: [],
      tuipics: [],
      selforpic: [],
      rowforpic: [],
      rowpics: [],
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    showPopup() {
      this.show = true;
    },

    //各个接口
    getApp() {
      //轮播图接口

      this.$axios.get("api/banner").then((res) => {
        this.images = res.data.banners;
        // console.log(res);
      });

      //每日推荐接口
      this.$axios.get("/api/homepage/dragon/ball").then((res) => {
        this.icons = res.data.data;
      });

      //推荐歌单
      this.$axios.get("/api/personalized").then((res) => {
        this.tuipics = res.data.result;
      });

      //精选歌曲
      this.$axios.get("/api/personalized/newsong").then((res) => {
        // console.log(res);
        // console.log(res.data.result[0].picUrl);
        this.rowpics = res.data.result;
        for (let i = 3; i < 6; i++) {
          this.selforpic.push(res.data.result[i]);
        }
      });

      //排行榜----推荐新音乐
      this.$axios.get("/api/personalized/newsong").then((res) => {
        // console.log(res);
        // console.log(res.data.result[0].picUrl);
        this.rowpics = res.data.result;
        for (let i = 0; i < 3; i++) {
          this.rowforpic.push(res.data.result[i]);
        }
      });
    },
    getSongList() {
      //歌单分类
      this.$axios.get("api/playlist/catlist").then((res) => {
        // console.log(res);
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getApp(); //执行接口
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.index {
  margin-bottom: 50px;
  background-color: rgb(245, 245, 245);
}
.van-swipe {
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
}
//====每日推荐
#square {
  padding: 0;
}
.van-grid-item__content--center {
  padding: 0;
  background-color: palegreen;
}
#square img {
  border: purple 1px solid;
}

// ====== 推荐歌单 =====
.recommed {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 0 10px;
  margin-bottom: 10px;
}
.seach {
  width: 100%;
  height: 54px;
}
.box {
  float: left;
  line-height: 54px;
  padding-left: 10px;
}
img {
  width: 90%;
  margin: 5%;
  border-radius: 15px;
}
#square {
  color: red;
  border: none;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}
.more {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25px;
  color: black;
  font-size: 18px;
  height: 35px;
  float: right;
}

// ====== 排行榜 =====

.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
.custom-title img {
  width: 50px;
  margin: 0;
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>
