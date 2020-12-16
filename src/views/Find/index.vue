<template> </template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    getPopularSongList() {
      //热门歌单分类
      this.$axios
        .get("api/login/cellphone?phone=17621047461&password=jiaziyang123")
        .then((res) => {
          console.log(res);
        });
    },
    // getSongList() {
    //   //歌单分类
    //   this.$axios.get("api/playlist/catlist").then((res) => {
    //     console.log(res);
    //   });
    // },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getPopularSongList();
    this.getSongList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
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

<style scoped></style>
