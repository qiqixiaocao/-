<!--  -->
<template>
  <div class="singer">
    <div class="city_body">
      <div class="city_list" style="padding-bottom: 0.4rem">
        <mt-index-list>
          <mt-index-section
            :index="items.title"
            v-for="items in alllist"
            :key="items.title"
          >
            <mt-cell
              :title="item.title"
              v-for="item in items.items"
              :key="item.title"
              @click.native="changeCity(item.id, item.url, item.title)"
            ></mt-cell>
          </mt-index-section>
        </mt-index-list>
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
    return { alllist: [] };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getCitys() {
      this.$request.get("/artist/list?type=-1&area=7").then((res) => {
        var list = res.data.artists;
        let map = {
          //定义一个map对象
        };
        list.forEach((item, index) => {
          // console.log(index);
          index;
          var s = item.name.substr(0, 1);
          this.first = this.pinyin(s, {
            style: this.pinyin.STYLE_FIRST_LETTER,
            heteronym: true,
          });
          item.word = this.first[0][0].toUpperCase();
          let key = item.word; //获取当前索引[你所存的城市首字母]
          if (!map[key]) {
            //如果map[key]不存在
            map[key] = {
              title: key,
              items: [],
              url: item.picUrl,
            };
          }
          map[key].items.push({
            title: item.name,
            id: item.id,
            url: item.picUrl,
          });
        });
        // let fire = []; //热门城市
        let ret = []; //所有排序后的城市
        for (let key in map) {
          // for  in
          let val = map[key]; //拿到map[key]  {title:'A',items:[{},{},{}]}
          if (map[key].title.match(/[a-zA-Z]/)) {
            //如果map【key】匹配上了
            ret.push(val); // {title:'A',items:[{},{},{}]}
          }
        }
        // console.log(ret); //[{title:'C',items:[]},{title:'A',items:[]},{title:'F',items:[]}]
        // 排序
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        });
        // this.hotlist = fire;
        this.alllist = ret;
        // console.log("alllist", this.alllist);
      });
    },
    changeCity(id, url, title) {
      this.$router.push({
        path: "/details",
        query: { id: id, url: url, title: title },
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCitys();
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
<style scoped></style>
