<template>
    <div>
        <el-button type="success" @click="addDept">添加</el-button>
        <dept-table
                :data="deptLists"
                @edit1="edit"
                @del1="del"
        />
        <dept-dialog
                :visible="deptVisible"
                :title="diaTitle"
                :form="form"
                @closeDialog="closeDpet"
        />
        <!--<dept-pagination-->
        <!--:currentPage="currentPage"-->
        <!--:total="total"-->
        <!--:pageSize="pageSize"-->
        <!--@handleSizeChange="handleSizeChange"-->
        <!--@handleCurrentChange="handleCurrentChange"-->
        <!--/>-->
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

    //引入
    import {getDepartments, editDepartments, delDepartments, addDepartments} from '@/request/api'
    // 引入子组件
    import DeptDialog from './children/DeptDialog'
    // 引入table组件
    import DeptTable from './children/DeptTable'
    import ManaPagination from '@/components/pagination/ManaPagination'
    // import DeptPagination from './children/DeptPagination'

    export default {
        name: "Department",
        data() {
            return {
                deptLists: [],
                headerObj: {
                    'color': 'red'
                },
                deptVisible: false,
                diaTitle: '',
                form: {},
                currentPage: 1, // 当前页
                pageSize: 5, // 当前页显示条数
                total: 0  // 总数
            }
        },
        components: {
            DeptDialog,
            DeptTable,
            // DeptPagination
            ManaPagination
        },
        methods: {
            handleSizeChange(size) {
                this.pageSize = size
                this.getDepartmentsFn()
            },
            handleCurrentChange(page) {
                this.currentPage = page
                this.getDepartmentsFn()
            },
            // 编辑按钮触发事件
            edit(row) {
                // 显示弹框
                this.diaTitle = '部门编辑'
                // 把当前table行数据赋值给el-form model
                console.log(row)
                // this.form = {
                //     name: row.name,
                //     sn: row.sn
                // }
                // row this.form指向同一个对象地址
                // this.form = JSON.parse(JSON.stringify(row))
                this.form = {...row}
                this.deptVisible = true
            },
            // 添加部门信息
            addDept() {
                // 1. 在api.js实现添加请求
                // 2. 引用api实现的方法
                //
                this.deptVisible = true
                this.diaTitle = '部门添加'
                // addDepartments({}).then(res=> {
                //
                // })
            },
            // 删除操作
            del(data) {
                // let id = data.id
                let {id} = data
                this.$confirm('是否删除该部门', '删除提示', {}).then(res => {
                    delDepartments({
                        id
                    }).then(res => {
                        if (res.success === true) {
                            // 刷新table数据
                            this.getDepartmentsFn()
                        }
                    })
                }).catch(err => {

                })

            },
            // 弹框子组件隐藏调用的方法
            closeDpet(data) {
                console.log(data)
                // 编辑：{id,name, sn}
                // 添加： {name, sn}
                this.deptVisible = false
                //data = {id: , name: ,sn, token}

                if (data) {
                    let {id, name, sn} = data
                    if (id) {
                        // 编辑操作
                        editDepartments(
                            {
                                id,
                                name,
                                sn
                            }
                        ).then(res => {
                            if (res.success === true) {
                                // 刷新table数据
                                this.getDepartmentsFn()
                            }
                        })
                    } else {
                        // 添加操作
                        addDepartments({
                            name: name,
                            sn: sn
                        }).then(res => {
                            if (res.success === true) {
                                // 刷新table数据
                                this.getDepartmentsFn()
                            }
                        })
                    }

                }
            },
            // 获取部门列表
            getDepartmentsFn() {
                getDepartments({
                    currentPage: this.currentPage,
                    pageSize: this.pageSize,
                }).then(res => {
                    if (res.success === true) {
                        this.deptLists = res.data.list
                        this.total = res.data.total
                    }
                })
            }
        },
        created() {
            this.getDepartmentsFn()
        }
    }
</script>

<style scoped>

</style>