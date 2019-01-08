<template>
  <div class="Regex">
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
  name: "News",
  components: {},
  data() {
    return {
      list: [
        {
          title: "密码必须由至少6个字符组成,必须包含数字大写字母和小写字母",
          reg: "reg = /^(?=.*d)(?=.*[A-Z])(?=.*[a-z]).[0-9a-zA-Z]{5,50}$/",
          aHref: ""
        },
        {
          title: "中国姓名校验包括少数民族",
          reg: "reg = /^[\\u4E00-\\u9FA5\\uf900-\\ufa2d·s]{2,20}$/", // nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
          aHref: "https://blog.csdn.net/sheng_li/article/details/73649071"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.Regex {
  font-size: 14px;

  .item {
    list-style: none;
    margin: 80px 0 0 0;
  }
}
</style>

