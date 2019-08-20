<template>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="employee-form">
        <el-form-item label="用户名" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="age">
            <el-select v-model="ruleForm.deptId">
                <el-option label="部门" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="超级管理员" prop="age">
            <el-switch
                    v-model="ruleForm.admin">
            </el-switch>
        </el-form-item>
        <el-form-item label="角色" v-show="!ruleForm.admin">
                <el-transfer v-model="ruleForm.role" :data="roles" :props="{label:'name', key:'id'}"></el-transfer>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {getDepartments,getRoles} from "../../request/api";

    export default {
        name: "AddEmployee",
        data() {
            return  {
                ruleForm: {

                },
                rules: {},
                roles: []
            }

        },
        created(){
            getDepartments({
                currentPage:1,
                pageSize:1000
            }).then(res=>{
                if(res.success === true){
                    this.deptLists=res.data.list
                }
            })
            getRoles({
                currentPage:1,
                pageSize:1000
            }).then(res=>{
                if(res.success === true){
                    this.roles=res.data.list
                }
            })
        }
    }
</script>

<style scoped>
    .employee-form {
        width: 800px;
    }
</style>