<template>
  <div class="details">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-image v-model="img" width="100%" height="4rem" fit="contain" :src="img" />
    <van-cell-group>
      <van-cell title="歌曲" value="专辑" />
      <van-cell v-for="item in songs" :key="item.name">
        <van-cell
          :title="item.name"
          :value="item.al.name"
          :label="item.alia[0]"
          :icon="item.al.picUrl"
          @click="goMusicPlayer(item.id, item.name, item.al.name)"
        />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      songs: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    goMusicPlayer(id, name, val) {
      //跳转到播放页
      this.$router.push({ path: "/musicplayer", query: { id, name, val } });
    },
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    getSing() {
      var id = this.$route.query.id;
      this.img = this.$route.query.url;
      this.name = this.$route.query.title;
      this.$request.get(`/artist/songs?id=${id}`).then((res) => {
        this.songs = res.data.songs;
        // console.log(this.songs);
      });
    },
  },
  created() {
    this.getSing();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>
