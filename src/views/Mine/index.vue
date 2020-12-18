<!--  -->
<template>
  <div class="mine">
    <!-- 显示用户头像，用户名，等级 -->
    <van-sticky>
      <div class="user">
        <div class="usermessage" v-if="userId">
          <img :src="avatarImg" alt="" class="avatar" />
          <h3>{{ userName }}</h3>
          <span>Lv:{{ level }}</span>
        </div>
        <van-button type="info" v-else @click="goLogin" class="login"
          >点击登录</van-button
        >
      </div>
    </van-sticky>
    <!-- 九宫格导航 -->
    <ul class="nav-box">
      <li><i class="iconfont icon-bendiyinle"></i><span>本地音乐</span></li>
      <li><i class="iconfont icon-weimingming133"></i><span>云盘</span></li>
      <li><i class="iconfont icon-gouwu"></i><span>已购</span></li>
      <li><i class="iconfont icon-bofang1"></i><span>最近播放</span></li>
      <li><i class="iconfont icon-women"></i><span>我的好友</span></li>
      <li><i class="iconfont icon-shoucang"></i><span>收藏和赞</span></li>
      <li><i class="iconfont icon-guangbo"></i><span>我的博客</span></li>
      <li><i class="iconfont icon-qita"></i><span>音乐应用</span></li>
    </ul>
    <div class="nav-box loginOut" v-if="!userId">
      <p>用户还未登录，请登录后查看歌单</p>
    </div>
    <!-- 歌单列表 -->
    <ul class="lists-cover" v-if="userId">
      <div class="lists-header">
        <span class="lists-count">我的歌单{{ Lists.length }}个</span>
        <i class="iconfont icon-gengduo"></i>
        <i class="iconfont icon-jia" @click="showPopup"></i>
      </div>
      <li class="lists" v-for="(item, index) in Lists" :key="item.ListId">
        <img :src="item.ListImg" alt="" class="lists-img" />
        <div class="lists-title" @click="goMusicList(item.ListId)">
          <span class="span1">{{ item.ListName }}</span>
          <span class="span2">{{ item.ListNum }}首</span>
        </div>
        <i class="iconfont icon-gengduo" @click="delList(index)"></i>
      </li>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
        @cancel="onCancel"
        cancel-text="取消"
        close-on-click-action
      />
      <van-popup
        v-model="show1"
        closeable
        @close="onClose"
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <van-form style="margin-top: 0.6rem">
          <van-field
            autocomplete="off"
            v-model="ListName"
            name="歌单名"
            label="歌单名"
            placeholder="请输入歌单名"
            :rules="[{ required: true, message: '请填写歌单名' }]"
          />
          <div style="margin: 0.32rem">
            <van-button
              round
              block
              type="info"
              :disabled="this.ListName ? false : true"
              @click="addList"
            >
              新建歌单
            </van-button>
          </div>
        </van-form>
      </van-popup>
    </ul>
    <van-button type="danger" v-if="userId" @click="loginOut" class="login"
      >退出登录</van-button
    >
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Vue from "vue";
import { Dialog, Toast } from "vant";
import { Sticky } from "vant";

Vue.use(Sticky);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      userId: "", //用户id
      cookie: "", //用户cookie
      avatarImg: "", //头像
      userName: "", //用户名
      level: "", //用户等级
      Lists: [], //用于存储用户歌单的信息
      show: false,
      show1: false,
      actions: [{ name: "删除" }],
      delIndex: "", //要删除歌单的index
      ListName: "", //新建的歌单名字
      fileList: [], //新建的歌单图片
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loginOut() {
      //退出登录
      Dialog.confirm({
        message: "是否退出当前账号？",
      })
        .then(() => {
          //点击确定
          localStorage.clear();
          Toast.success({
            message: "您已成功退出登录！",
            duration: 2000,
          });
          this.$request.get("/logout");
          this.$router.push("/login");
        })
        .catch(() => {
          //点击取消
          // on cancel
        });
    },
    addList() {
      //新建歌单
      let newList = {
        ListName: this.ListName,
        ListNum: 0,
        ListImg:
          "https://p2.music.126.net/6LnmjDqcMTyW5ntqtAH0kg==/109951164332860622.jpg",
      };
      this.Lists.push(newList);
      Toast.success({
        message: "歌单创建成功!",
        duration: 2000,
      });
      this.show1 = false;
    },
    onClose() {
      this.ListName = "";
    },
    showPopup() {
      this.show1 = true;
    },
    goMusicList(id) {
      //跳转到歌单详情页
      this.$router.push({
        path: "/musiclist",
        query: {
          id,
        },
      });
      //   console.log(id);
      // console.log(id);
    },
    delList(index) {
      //数据赋值
      this.show = true;
      this.delIndex = index;
    },
    onCancel() {
      //点击取消时
    },
    onSelect() {
      //点击删除时
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Dialog.confirm({
        message: "删除后无法撤回，是否删除？",
      })
        .then(() => {
          //点击确定
          this.Lists.splice(this.delIndex, 1);
          Toast.success({
            message: "删除成功！",
            duration: 1000,
          });
        })
        .catch(() => {
          //点击取消
          // on cancel
        });
    },
    getUid() {
      //获取登录后的用户id
      //   localStorage.setItem("userId", "1964379425"); //测试用，用户id
      //   localStorage.setItem(
      //     "cookie",
      //     "__csrf=7a2cb15486114ad189d892f951378cf2; Max-Age=1296010; Expires=Wed, 30 Dec 2020 12:06:19 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Wed, 30 Dec 2020 12:06:09 GMT; Path=/;;MUSIC_U=1b55f0bea28824ee402bc9589c5e5bcf63a8bd66354c1adc1db1d781e163102f0931c3a9fbfe3df2; Max-Age=1296000; Expires=Wed, 30 Dec 2020 12:06:09 GMT; Path=/;"
      //   ); //测试用，用户cookie
      this.userId = localStorage.getItem("userId"); //获取登录后的用户id
      this.cookie = localStorage.getItem("cookie"); //获取登录后的用户cookie
    },
    getUser() {
      //获取用户头像，用户名，用户等级
      this.$request.get(`/user/detail?uid=${this.userId}`).then((res) => {
        if (res.data.code === 200) {
          //   console.log(res);
          this.avatarImg = res.data.profile.avatarUrl;
          this.userName = res.data.profile.nickname;
          this.level = res.data.level;
        }
      });
    },
    getPlayList() {
      //获取用户歌单
      this.$request.get(`/user/playlist?uid=${this.userId}`).then((res) => {
        if (res.status === 200) {
          //   console.log(res.data.playlist);
          let playlist = res.data.playlist;
          for (let i = 0; i < playlist.length; i++) {
            let ListName = playlist[i].name; //歌单名称
            let ListId = playlist[i].id; //歌单id
            let ListImg = playlist[i].coverImgUrl; //歌单封面图
            let ListNum = playlist[i].trackCount; //歌单歌曲数量
            this.Lists.push({
              ListName,
              ListId,
              ListImg,
              ListNum,
            });
          }
          //   console.log(this.Lists);
        }
      });
    },
    goLogin() {
      //跳转至登录页
      this.$router.push("/login");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.userId = localStorage.getItem("userId");
    if (this.userId) {
      //如果登录
      this.getUid();
      this.getUser();
      this.getPlayList();
    }
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
<style scoped>
.mine {
  width: 100%;
  min-height: 100%;
  background-color: rgb(245, 245, 245);
  padding-bottom: 1.2rem;
}
.user {
  padding-top: 1rem;
  background: rgb(245, 245, 245);
  text-align: center;
}
.usermessage {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.avatar {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  border: 0.1rem solid #fff;
}
.usermessage span {
  display: block;
  width: 0.7rem;
  height: 0.5rem;
  text-align: center;
  font-size: 0.3rem;
  line-height: 0.5rem;
  border-radius: 0.1rem;
  background: #fff;
}
.usermessage h3 {
  font-size: 0.5rem;
}
.lists-cover {
  width: 90%;
  background: #fff;
  margin: 0 auto;
  border-radius: 0.3rem;
  padding-top: 0.4rem;
  margin-top: 0.4rem;
  overflow: hidden;
}
.lists {
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.6rem;
  margin-bottom: 0.4rem;
}
.lists-img {
  display: block;
  float: left;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.3rem;
  margin-left: 0.4rem;
}
.lists-title {
  float: left;
  height: 1.2rem;
  margin-left: 0.2rem;
}
.lists-title .span1 {
  display: block;
  font-size: 0.36rem;
  width: 4rem;
}
.lists-title .span2 {
  font-size: 0.28rem;
  color: rgb(140, 140, 140);
}
.login {
  display: block;
  font-size: 0.3rem;
  margin: 0 auto;
  margin-top: 0.6rem;
}
.nav-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  height: 3rem;
  background: #fff;
  margin: 0 auto;
  border-radius: 0.3rem;
  padding-top: 0.4rem;
  margin-top: 0.4rem;
}
.nav-box li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  text-align: center;
}
.nav-box span {
  font-size: 0.36rem;
}
.nav-box .iconfont {
  font-size: 0.6rem;
  color: red;
}
.lists-count {
  margin-left: 0.5rem;
  font-size: 0.4rem;
}
.lists .icon-gengduo {
  float: right;
  font-size: 0.44rem;
}
.lists-header {
  padding-right: 0.11rem;
  margin-bottom: 0.2rem;
}
.lists-header .icon-gengduo {
  float: right;
  font-size: 0.44rem;
}
.lists-header .icon-jia {
  float: right;
  font-size: 0.32rem;
  margin-top: 0.08rem;
  margin-right: 0.2rem;
}
.loginOut {
  text-align: center;
  padding-top: 0.6rem;
  font-size: 0.3rem;
}
</style>
