<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from "./components/content/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.v-enter,
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
