<template>
  <div class="mine">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-card :desc="desc" :title="title" :thumb="imageURL" />
    <div class="list">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="item.id"
        @click="Listen(item.id, index)"
      >
        <van-row>
          <van-col span="2">{{ index + 1 }}</van-col>
          <van-col span="20">
            <p>{{ item.name }}</p>
            <p>{{ item.ar[0].name + "－－" + item.al.name }}</p>
          </van-col>
          <van-col span="2"
            ><span class="iconfont icon-gengduo"></span
          ></van-col>
        </van-row>
      </div>
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
      Songs: [],
      imageURL: "",
      title: "",
      list: [],
      desc: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getSongs() {
      const id = this.$route.query && this.$route.query.id;
      console.log(id);
      this.$request.get(`/playlist/detail?id=${id}`).then((res) => {
        console.log(res);
        this.Songs = res.data.playlist.tracks;
        console.log(this.Songs);
      });
    },

    Listen(id, num) {
      console.log(id, num);
      this.$store.state.id = id;
      this.$router.push({
        path: "/musicplayer",
        query: {
          id: id,
          name: this.list[num].name,
          val: this.list[num].ar[0].name,
        },
      });
    },
    getList() {
      if (this.$route.query.id) {
        console.log(this.$route.query.id);
        this.$request
          .get("/playlist/detail?id=" + this.$route.query.id)
          .then((res) => {
            console.log(res);
            this.title = res.data.playlist.name;
            // this.list = res.data.playlist.tracks;
            this.imageURL = res.data.playlist.coverImgUrl;
            this.desc = res.data.playlist.creator.nickname + "　>";
            console.log(res.data.playlist);
            for (let i in res.data.playlist.trackIds) {
              this.$request
                .get("/song/detail?ids=" + res.data.playlist.trackIds[i].id)
                .then((res) => {
                  this.list.push(res.data.songs[0]);
                });
            }
            console.log(this.list);
          });
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("分享");
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前

  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.list .item {
  margin: 4px 0;
  background: #fafafa;
  line-height: 100%;
}
</style>
