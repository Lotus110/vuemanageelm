<template>
  <div class="header_container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-dropdown @command="handleCommand">
        <img src="/src/style/img/index-banner1.jpg" class="avator">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home">首页</el-dropdown-item>
          <el-dropdown-item command="singout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
import {signout} from '@/api/getData'
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  created(){
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
  },
  computed: {
    ...mapState(['adminInfo']),
  },
  methods: {
      ...mapActions(['getAdminData']),
      async handleCommand(command) {
        if (command == 'home') {
          this.$router.push('/manage');
        }else if(command == 'singout'){
          const res = await signout();
          console.log(res);
          if (res.status == 1) {
            this.$message({
                type: 'success',
                message: '退出成功'
            });
            return;
            this.$router.push('/');
          }else{
            this.$message({
                type: 'error',
                message: res.message
            });
          }
        }
      },
    }
}
</script>

<style lang="scss">
  @import '../style/mixin';
  .header_container{
      background-color: #EFF2F7;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
    }
    .avator{
      @include wh(36px, 36px);
      border-radius: 50%;
      margin-right: 30px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
