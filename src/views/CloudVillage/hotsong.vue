<template>
  <div class="">
    <van-row>
      <van-col span="2"
        ><van-nav-bar left-arrow @click-left="onClickLeft"
      /></van-col>
      <van-col span="20"
        ><van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
          @click="songhot"
      /></van-col>
    </van-row>

    <br />

    <h4>热搜榜</h4>
    <van-divider style="border-color:#999" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
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
  },
  created() {},
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
</style>
