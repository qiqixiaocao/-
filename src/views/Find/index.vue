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
        <div style="background: #fff; height: 0.6rem">
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
              height: 0.6rem;
              line-height: 0.6rem;
              margin-left: 0.1rem;
            "
          >
            <span
              style="
                width: 0.3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
              >神秘糖果店老板娘&nbsp;></span
            >
            <van-icon
              name="scan"
              class="search-icon"
              style="font-size: 0.4rem; float: right"
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
        style="border-bootom: 0; float: left; line-height: 1.08rem"
      />
    </div>

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" style="height: 100%" :height="145">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imageUrl" style="margin: 0 0.4rem" />
      </van-swipe-item>
    </van-swipe>
    <!-- 每日推荐图标 -->
    <div
      style="display: flex; text-align: center; background: #fff; overflow-x: scroll"
    >
      <dl
        style="width: 15%; margin: 0.2rem"
        v-for="item in icons"
        :key="item.id"
      >
        <dt
          style="background: rgb(253, 120, 119); border-radius: 50%; margin: 0.2rem 0"
        >
          <img :src="item.iconUrl" alt="" style="width: 80%; height: 80%" />
        </dt>
        <dt
          v-text="item.name"
          style="
            font-size: 0.28rem;
            width: 1rem;
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
      <div style="height: 0.9rem; margin: 0 0.3rem -0.2rem 0.3rem">
        <h2 style="float: left; width: 3rem">推荐歌单</h2>
        <van-button type="primary" to="index" class="more">更多 ></van-button>
      </div>
      <div
        style="
          height: 7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        "
      >
        <van-grid
          :gutter="5"
          icon-size="1rem"
          column-num="3"
          :border="false"
          style="padding: 0; height: 6rem"
        >
          <van-grid-item v-for="item in tuipics" :key="item.id">
            <van-image radius="15" :src="item.picUrl" />
            <p
              v-text="item.name"
              style="
                width: 2rem;
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
      style="background-color: #fff; border-radius: 0.4rem; padding: 0.2rem 0; margin: 0.2rem 0"
    >
      <p style="color: #aaa; margin: 0 0.3rem">私人定制</p>
      <div style="height: 0.9rem; margin: 0 0.3rem">
        <h2 style="float: left; width: 5rem">好听的华语歌曲精选</h2>
        <van-button type="primary" to="index" class="more">播放 ></van-button>
      </div>
      <div style="margin: 0 0.2rem">
        <van-cell v-for="item in selforpic" :key="item.id">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title" style="float: left">
              <img :src="item.picUrl" alt="" />
            </span>
            <p>
              <span style="font-size: 0.36rem" v-text="item.name"></span>
              <span
                style="color: #aaa; margin: 0 0.3rem"
                v-text="item.song.album.artists[0].name"
              ></span>
            </p>
            <p style="color: orange">超71%人播放</p>
          </template>
        </van-cell>
      </div>
    </div>

    <!-- 精选音乐视频 -->
    <div
      style="background-color: #fff; border-radius: 0.4rem; padding: 0.2rem 0; margin: 0.2rem 0"
    >
      <div style="height: 0.9rem; margin: 0 0.3rem">
        <h2 style="float: left">精选音乐视频</h2>
        <van-button type="primary" to="index" class="more">去推歌 ></van-button>
      </div>
      <div style="margin: 0 0.2rem; text-align: center">
        <van-swipe :autoplay="2000" style="height: 100%" :height="145">
          <van-swipe-item v-for="(item, index) in videos" :key="index">
            <div style="background: #fff; height: 2.28rem; position: relative">
              <img
                :src="item.cover"
                style="
                  padding: 0;
                  margin: 0;
                  margin: 0 0.4rem;
                  width: 6rem;
                  height: 2.6rem;
                  border-radius: 0.4rem;
                "
              />
              <p
                v-text="item.artistName + item.name"
                style="
                  position: absolute;
                  left: 1.8rem;
                  bottom: 0;
                  width: 3.2rem;
                  color: orange;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              ></p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 音乐日历 -->

    <!-- 专属场景歌单 -->

    <!-- 语音直播 -->

    <!-- 新歌 -->

    <!-- 排行榜 -->
    <div
      style="background-color: #fff; border-radius: 0.4rem; padding: 0.2rem 0; margin: 0.2rem 0"
    >
      <div style="height: 0.9rem; margin: 0 0.3rem">
        <h2 style="float: left; width: 3rem">排行榜</h2>
        <van-button type="primary" to="index" class="more">更多 ></van-button>
      </div>
      <div style="margin: 0 0.24rem; height: 4.3rem">
        <div
          style="
            width: 95%;
            padding: 0.2rem 0 0 0.24rem;
            box-shadow: #ddd 0 0 0.02rem 0.02rem;
            border-radius: 0.2rem;
          "
        >
          <h3 style="text-align: center; padding-bottom: 0.16rem">
            硬地原创音乐榜
            <span style="color: #bbb; font-weight: 400">></span>
          </h3>
          <van-cell
            v-for="item in rowforpic"
            :key="item.id"
            style="padding: 0;width:6.5rem;height:1.1rem;line-height:1.1rem;"
          >
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title" style="float: left;">
                <img :src="item.picUrl" alt="" />&nbsp;
              </span>
              <p style="padding: 0 0.2rem 0 0; width: 6rem;">
                <span style="font-size: 0.36rem" v-text="item.name"></span>
                <span
                  style="color:#aaa; padding-left: 0.2rem;"
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
import Vue from "vue";
import { Lazyload } from "vant";
import elementUi from "element-ui";
Vue.use(Lazyload);
Vue.use(elementUi);
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
      active: "1",
      videos: [],
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
      this.$request.get("/banner").then((res) => {
        this.images = res.data.banners;
        // console.log(res);
      });

      //每日推荐接口
      this.$request.get("/homepage/dragon/ball").then((res) => {
        this.icons = res.data.data;
      });

      //推荐歌单
      this.$request.get("/personalized").then((res) => {
        this.tuipics = res.data.result.slice("0", "6");
      });

      //精选歌曲
      this.$request.get("/personalized/newsong").then((res) => {
        // console.log(res);
        // console.log(res.data.result[0].picUrl);
        for (let i = 3; i < 6; i++) {
          this.selforpic.push(res.data.result[i]);
        }
      });
      //
      //
      //精音乐视频
      this.$request.get("/mv/all").then((res) => {
        // console.log(res);
        // console.log(res.data.data);
        // console.log(res.data.data[0].cover);
        for (let i = 0; i < 6; i++) {
          this.videos.push(res.data.data[i]);
        }
        // console.log(this.videos);
      });
      //
      //推荐歌单
      //
      //排行榜----推荐新音乐
      this.$request.get("/personalized/newsong").then((res) => {
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

      this.$request.get("playlist/catlist").then((res) => {
        console.log(res);
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
  margin-bottom: 1rem;
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
  border: purple 0.02rem solid;
}
// ========精选音乐视频=======
.el-carousel__item:nth-child(2n) {
  background-color: #fff;
  height: 2.3rem;
  width: 3.8rem;
  border-radius: 0.4rem;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
  border-radius: 0.4rem;
  height: 2.3rem;
}

// ====== 推荐歌单 =====
.recommed {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0.4rem 0 0.2rem;
  margin-bottom: 0.2rem;
}
.seach {
  width: 100%;
  height: 1.08rem;
}
.box {
  float: left;
  line-height: 1.08rem;
  padding-left: 0.2rem;
}
img {
  width: 90%;
  margin: 5%;
  border-radius: 0.3rem;
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
  border: 0.02rem solid #ddd;
  border-radius: 0.5rem;
  color: black;
  font-size: 0.36rem;
  height: 0.7rem;
  float: right;
}

// ====== 排行榜 =====

.custom-title {
  margin-right: 0.08rem;
  vertical-align: middle;
}
.custom-title img {
  width: 1rem;
  margin: 0;
}
.search-icon {
  font-size: 0.32rem;
  line-height: inherit;
}
</style>
