<template>
  <div id="layout">
    <head-nav></head-nav>
    <left-menu></left-menu>
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import leftMenu from "./leftMenu";
import headNav from "./headNav";
export default {
  name: "layout",
  components: {
    leftMenu,
    headNav
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  margin: 60px 0 0 180px;
  top: 70px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>