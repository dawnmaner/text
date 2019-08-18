<template>
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
        </el-table-column>
    </el-table>
</template>

<script>
    import {getDepartments} from "@/request/api";

    export default {
        name: "Department",
        data(){
            return {
                deptLists:[]
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