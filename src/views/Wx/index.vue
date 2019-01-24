<template>
  <div class="Wx">
    <ul class="item">
      <li v-for="(item,index) in list" :key="index">
        <p>{{index+1}}、{{item.title}}</p>
        <p>{{item.reg}}</p>
        <a :href="item.aHref" v-if="item.aHref" target="_blank">参考链接</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Vue",
  components: {},
  data() {
    return {
      list: [
        {
          title: "微信跳转页面缓存白屏问题",
          reg: "跳转empty再次this.$router.push('index')",
          aHref: ""
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.Wx {
  font-size: 14px;

  .item {
    list-style: none;
    margin: 80px 0 0 0;
  }
}
</style>

