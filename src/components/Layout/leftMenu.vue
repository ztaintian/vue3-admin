<template>
  <div class="left-menu">
    <el-row class="menu_page">
      <el-col>
        <el-menu
          mode="vertical"
          theme="dark"
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          :collapse="isCollapse"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#ff6428"
        >
          <template v-for="(item,index) in lefeMenuList">
            <!--表示 有二级菜单 -->
            <el-submenu
              v-if="item.children  && item.children.length > 0 && !item.noDropdown"
              :index="item.path"
              :key="item.path"
            >
              <template slot="title">
                <i :class="'fa fa-margin '+item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <router-link
                v-for="(citem) in item.children"
                :to="item.path+'/'+citem.path"
                :key="citem.name"
              >
                <el-menu-item :index="citem.path">
                  <span slot="title">{{citem.name}}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>

            <!--表示 有一级菜单 noDropdown:true-->
            <router-link :to="item.path" :key="index">
              <el-submenu
                class="dropItem"
                v-if="item.children && item.children.length > 0 && item.noDropdown"
                :index="item.path"
              >
                <template slot="title">
                  <!-- <i :class="'fa fa-margin '+item.icon"></i> -->
                  <span class="23">{{item.name}}</span>
                </template>
              </el-submenu>
            </router-link>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import * as mUtils from "@/utils/mUtils";

export default {
  name: "leftMenu",
  data() {
    return {
      isDropdown: false
    };
  },
  computed: {
    lefeMenuList() {
      return this.$router.options.routes;
    },
    isDropname() {
      // false
      return this.$router.options.routes.isDropname;
    },
    isCollapse() {
      return this.$router.options.routes.isCollapse;
    }
  },
  created() {
    console.log("hhhh", this.$router.options.routes);
  },
  methods: {
    showDropdown() {
      this.isDropdown = this.$store.state.menu.isCollapse;
    }
  }
};
</script>


<style lang="stylus" scoped>
.menu_page {
  position: fixed;
  top: 60px;
  left: 0;
  width 180px
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}

.fa-margin {
  margin-right: 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  // min-height: 400px;
}

.el-menu-vertical-demo {
  width: 35px;
}

.el-submenu .el-menu-item {
  min-width: 180px;
}

.el-menu {
  .el-menu-item {
    padding-left: 40px !important;
  }
}

.hiddenDropdown, .hiddenDropname {
  display: none;
}

.router-link-active {
  li {
    .el-submenu__title {
      color: #ff6428 !important;
    }
  }
}
</style>
