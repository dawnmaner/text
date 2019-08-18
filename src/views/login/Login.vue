<template>
    <div class="login-wrapper">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-content">
            <h3>扣丁狼客户信息管理系统</h3>
            <el-form-item prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="ruleForm.username" autocomplete="off"></el-input>
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
    import request from '@/request/request'
    import qs from 'qs'
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
                this.$refs['ruleForm'].validate(vali =>{
                if(vali){
                    console.log('成功')
                    request.post('api/coding/tokens',qs.stringify({
                        username:this.ruleForm.username,
                        password:this.ruleForm.pwd
                    })) .then(res=>{if(res.success===true){
                        this.$router.push('/department')
                        localStorage.setItem('token',res.data)
                        localStorage.setItem('username',this.ruleForm)
                        this.$message.success(res.msg)
                    }else {
                        this.$message.error(res.msg)
                    }
                    })
                }else{
                    return false
                }
                })

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