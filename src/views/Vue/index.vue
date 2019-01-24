<template>
  <div class="Vue">
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
          title: "对象挂原型链方法",
          reg: "Example:Object.defineProperty(Vue.prototype, '$api', \{ value: api \})",
          aHref: ""
        },
        {
          title: "vue挂全局filters方法",
          reg: "Object.keys(filters).forEach(key => \{ Vue.filter(key, filters[key])\}",
          aHref: ""
        },
        {
          title: "注册一个名为v-focus的全局自定义指令",
          reg: "Vue.directive('focus', \{inserted: function (el) \{el.focus()\}\})",
          aHref: ""
        },
        {
          title: "vue打包通过image-webpack-loader插件对图片压缩优化",
          reg: "step1：npm install image-webpack-loader --save-dev;step2：在build/webpack.base.conf.js中改如下配置:loader: ['url-loader?limit=10000&name=' + utils.assetsPath('img/[name].[hash:7].[ext]'),'image-webpack-loader]",
          aHref: "https://blog.csdn.net/przlovecsdn/article/details/82761606"
        },
        {
          title: "webpack4配置vue项目不用vue-cli",
          reg: "",
          aHref: "https://www.jianshu.com/p/d2c5d5190641"
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.Vue {
  font-size: 14px;

  .item {
    list-style: none;
    margin: 80px 0 0 0;
  }
}
</style>

