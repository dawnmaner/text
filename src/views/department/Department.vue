<template>
    <div>
    <el-table
            :data="deptLists"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="编号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="部门名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="sn"
                label="部门编号"
                width="180">
        </el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button
                        type="primary"
                        size="mini"
                        @click="edit(scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="deletes()">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog :title="diaTitle" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="部门名称" label-width="80px">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门编号" label-width="80px">
                <el-input v-model="form.sn" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    </div>
</template>

<script>
    import {getDepartments} from "@/request/api";

    export default {
        name: "Department",
        data(){
            return {
                deptLists:[],
                dialogFormVisible:false,
                form:{},
                diaTitle:'',
            }

        },
        methods:{
            edit(row){
            this.diaTitle='部门编辑',
                this.form=row
                this.dialogFormVisible=true
            },
            deletes(){

            }
        },
        created(){
            getDepartments({
                token:localStorage.getItem('token'),
                currentPage:1,
                pageSize:5,
            }).then(res=>{
            if(res.success===true){
                this.deptLists=res.data.list
            }
            })
        }
    }
</script>

<style scoped>

</style>