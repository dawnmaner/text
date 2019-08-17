<template>
    <div class="login-wrapper">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-content">
            <h3>扣丁狼客户信息管理系统</h3>
            <el-form-item prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="loginFn()">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {},
                rules: {
                    username: [
                        {required:true,message:'请输入账户',trigger: 'blur'}
                    ],
                    pwd: [
                        {required:true,message:'请输入密码',trigger: 'blur'}
                    ],
                },
            }
        },
        methods: {
            loginFn() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .login-wrapper {
        width: 100%;
        height: 100%;
        background:#324057;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-content{
            h3{text-align: center;
            padding: 10px 0}
            width: 320px;
            height: 240px;
        }
    }
</style>