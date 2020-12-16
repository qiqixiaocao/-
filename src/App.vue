<template>
  <div id="app">
    <header></header>
    <main>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <!-- <aplayer
      autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
      }"
    /> -->
    <footer>
      <Footer v-show="$route.meta.showFooter"></Footer>
    </footer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import Footer from "./components/content/Footer";
export default {
  name: "App",
  components: {
    Aplayer,
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
