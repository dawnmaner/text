<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="关键字">
                <el-input v-model="keyword" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="部门">
                <el-select v-model="deptId" placeholder="活动区域">
                    <el-option label="全部" :value="-1"></el-option>
                    <el-option v-for="dept in deptLists" :label="dept.name" :value="dept.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
                <el-button type="success" @click="AddEmployee">添加</el-button>
                <el-button type="danger" @click="dels">批量删除</el-button>
                <el-button type="warning" @click="exportExcel">导出</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="tableData"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="编号">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="email"
            >
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄"
            >
            </el-table-column>
            <el-table-column
                    prop="dept"
                    label="部门"
            >
            </el-table-column>
            <el-table-column
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button type="primary" size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <mana-pagination
                :currentPage="currentPage"
                :total="total"
                :pageSize="pageSize"
                @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange"
        />
    </div>
</template>

<script>
    import {getDepartments,getEmployees} from '@/request/api'
    import ManaPagination from '@/components/pagination/ManaPagination'
    import AddEmployee from "./AddEmployee";
    export default {
        name: "Employee",
        data() {
            return {
                keyword: '',
                deptId: -1,
                deptLists: [],
                currentPage: 1,
                pageSize: 5,
                tableData: [],
                total: 0
            }
        },
        components:{ManaPagination,AddEmployee},
        methods: {
            search() {},
            add() {},
            dels() {},
            exportExcel() {},
            handleSelectionChange() {
            },
            AddEmployee() {
                this.$router.push({path: '/employee/add'})
            },
            handleSizeChange(size) {
            this.pageSize=size
                this.getEmployeesFn()
            },
            handleCurrentChange(page){
                this.pageSize = size
                this.getEmployeesFn()
            },
            getEmployeesFn(){
                getEmployees({
                    currentPage:this.currentPage,
                    pageSize:this.pageSize,
                    keyword:this.keyword,
                    deptId: this.deptId
                }).then(res=>{
                    if(res.success ===true){
                        this.tableData=res.data.list
                        this.total=res.data.total
                    }
                })
            }


        },
        created() {
            getDepartments({
                currentPage: 1,
                pageSize: 1000
            }).then(res => {
                if (res.success === true) {
                    this.deptLists = res.data.list
                }
            })
            // 获取员工信息列表
            this.getEmployeesFn()
        }
    }
</script>

<style scoped>

</style>