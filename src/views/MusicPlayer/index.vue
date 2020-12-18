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
    <aplayer :audio="audio" :lrcType="1" />
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      Songtitle: "",
      id: "",
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: "",
        lrc: "",
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("分享");
    },
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
  created() {
    this.id = this.$route.query.id;
  },
  mounted() {
    this.getmusicUrl();
    this.Songtitle = this.$route.query.songname;
  },
  watch: {
    id: function (newVal, oldVal) {
      // TO DO
      console.log("newVal:", newVal);
      console.log("oldVal:", oldVal);
    },
  },
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
