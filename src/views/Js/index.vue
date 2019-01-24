<template>
  <div class="Js">
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
  name: "Js",
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
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.Js {
  font-size: 14px;

  .item {
    list-style: none;
    margin: 80px 0 0 0;
  }
}
</style>

