<template>
  <div class="">
    <van-row>
      <van-col span="2"
        ><van-nav-bar left-arrow @click-left="onClickLeft"
      /></van-col>
      <van-col span="20"
        ><van-search
        class="search"
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
          @click="songhot"
      /></van-col>
    </van-row>

    <br />

    <h4>热搜榜</h4>
    <van-divider style="border-color:#999" />
    <div class="hotlistbox">
      <ul>
        <li v-for="(tit , index) in hotlist" :key="tit.first" ><p>{{index+1}}</p>{{tit.first}}</li>
      </ul>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      value: "",
      hotlist:[]
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
  created() {this.$axios.get('api/search/hot').then((res)=>{
        console.log(res,"hot11111")
        console.log(res.data.result.hots);

          this.hotlist=res.data.result.hots
      console.log(this.hotlist,"222222");
      })

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
.search{
  margin-top:10px
}
.hotlistbox ul{
  width: 100%;
  // background: pink;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
}
.hotlistbox ul li{
  width: 50%;
  margin-bottom: 16px;
  font-size: 14px;
}
li{
  display: flex;
}
p{
//  font-style: none;
  display: inline-block;
  width: 15px;
}
</style>
