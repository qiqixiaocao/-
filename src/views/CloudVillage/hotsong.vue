<template>
  <div class="wrapbox">
    <van-row>
      <van-col span="2"><van-nav-bar left-arrow @click-left="onClickLeft" /></van-col>
      <van-col span="20"
        ><van-search
          class="search"
          v-model="value"
          placeholder="请输入搜索关键词"
          @input.native="searchinput"
      /></van-col>
    </van-row>
    <br />

    <h4>热搜榜</h4>
    <van-divider style="border-color: #999" />
    <div class="hotlistbox">
      <ul>
        <li v-for="(tit, index) in hotlist" :key="tit.first">
          <p>{{ index + 1 }}</p>
          {{ tit.first }}
        </li>
      </ul>
    </div>
    <div class="kuaikuai">
      <ul>
        <li v-for="(box, index) in drglsp" :key="index">
          <div class="box_area">{{ box }}</div>
        </li>
      </ul>
    </div>
    <div class="suslist">
      <ul>
        <li v-for="(item, index2) in drgsuplsl" :key="index2">
          {{ item.keyword }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      hotlist: [],
      drglsp: [
        "歌手分类",
        "听歌有奖",
        "电音专区",
        "古典专区",
        "ACG专区",
        "亲子专区",
        "说唱专区",
        "DJ专区",
        "声之剧场",
        "浪姐团综",
        "火前留名",
        "推歌精选",
      ],
      message: "",
      drgsuplsl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    songhot() {
      console.log("songhot");
    },
    searchinput() {
      if (this.value) {
        this.$request
          .get(`/search/suggest?keywords= ${this.value}&type=mobile`)
          .then((res) => {
            //   console.log(res, "ssssssearch");
            // console.log(res);
            this.drgsuplsl = res.data.result.allMatch;
            // this.drgsuplsl = message.slice("0", "10");
            // //   console.log(message, this.drgsuplsl, "000000000");
          });
      } else {
        this.drgsuplsl = "";
      }
    },
  },
  created() {
    this.$request.get("/search/hot").then((res) => {
      //   console.log(res, "hot11111");
      //   console.log(res.data.result.hots);
      this.hotlist = res.data.result.hots;
      //   console.log(this.hotlist, "222222");
    });
    this.searchinput();
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

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
h4 {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
}
.search {
  margin-top: 0.2rem;
}

.hotlistbox ul {
  margin-left: 15px;
  width: 100%;
  // background: pink;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
}

.hotlistbox ul li {
  width: 40%;
  margin-bottom: 16px;
  font-size: 14px;
}
li {
  display: flex;
}
p {
  //  font-style: none;
  display: inline-block;
  width: 19px;
}
.box_area {
  width: 150px;
  height: 50px;
  border-radius: 4px;
  background: rgb(250, 94, 32);
}
.kuaikuai ul {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}
.kuaikuai ul li {
  color: white;
  text-align: center;
  line-height: 50px;
  margin: 4px;
}
.wrapbox {
  position: relative;
}
.suslist {
  background: pink;
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 999;
  border-radius: 4px;

  box-shadow: 0 10px 10px 0 #999;
}
.suslist ul li {
  border-bottom: 1px solid #999;
  line-height: 30px;
  width: 310px;
  height: 30px;
  background: white;
}
</style>
