<template>
    <div>
        <!--    头部-->
        <m-header>头部</m-header>
        <!--    左侧菜单-->
        <m-side-menu>左侧菜单</m-side-menu>
        <!--中间内容-->
        <m-content>中间内容</m-content>
    </div>

</template>

<script>
    //1 引入组件
    import MHeader from "./Header";
    import MSideMenu from "./SideMenu";
    import MContent from "./Content";
    //注册组件
    export default {
        name: "Homepage",
        components:{
            MHeader,MSideMenu,MContent,
        }
    }
</script>

<style scoped>

</style>