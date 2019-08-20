<template>
    <el-table
            :data="data"
            :stripe="true"
            :border="true"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="编号">
        </el-table-column>
        <el-table-column
                prop="name"
                label="部门名称">
        </el-table-column>
        <el-table-column
                prop="sn"
                label="部门编号">
        </el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button
                        type="primary"
                        size="mini"
                        @click="edit(scope.row)"
                >编辑
                </el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="del(scope.row)"
                >删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "DeptTable",
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        methods: {
            edit(row) {
                // 子组件传输到父组件
                this.$emit('edit1', row)
            },
            del(row) {
                this.$emit('del1', row)
            }
        }
    }
</script>

<style scoped>

</style>