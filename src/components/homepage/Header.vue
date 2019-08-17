<template>
    <div class="header-wrapper">
        <h3 class="header-title">扣丁狼管理系统</h3>
        <i class="el-icon-menu header-icon"></i>
        <el-dropdown trigger="click" class="header-user-info">
      <span class="el-dropdown-link  header-info-txt" >
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
.header-wrapper{
    width: 100%;
    height: 70px;
    line-height: 35px;
    background:#409EFF;
    .header-title{
        float: left;
        padding: 0 10px;
        color: #ffff;
    }
    .header-icon{
        float: left;
        line-height: 70px;
        color: #ffff;
        font-size:24px;
    }
    .header-user-info{
        line-height:70px;
        float:right;
        margin: 0 10px;
        .header-info-txt{
            color: #fff;
        }
    }

}
</style>