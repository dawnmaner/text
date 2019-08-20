<template>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
</template>

<script>
    export default {
        name: "ManaPagination",
        props: ['currentPage', 'total', 'pageSize'],
        data() {
            return {
                // currentPage: 1, // 当前页
                // total: 0,  // 总数
                // pageSize: 5 // 当前页显示条数
            }
        },
        methods: {
            handleSizeChange(size) {
                console.log(size)
                // 子传父(自定义事件)
                this.$emit('handleSizeChange', size)
                // this.pageSize = size
                // this.getDepartmentsFn()
            },
            handleCurrentChange(page) {
                console.log(page)
                this.$emit('handleCurrentChange', page)
                // this.currentPage = page
                // this.getDepartmentsFn()
            },
        }
    }
</script>

<style scoped>

</style>