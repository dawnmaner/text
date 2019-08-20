<template>
    <el-table
            :data="data">
        <el-table-column prop="id"
                         label="编号"
        ></el-table-column>
        <el-table-column prop="title"
                         label="标题"
        ></el-table-column>
        <el-table-column prop="sn"
                         label="编码"
        ></el-table-column>
        <el-table-column prop="intro"
                         label="简介"
        ></el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button
                        type="primary"
                        size="mini"
                        @click="edit(scope.row)"
                >编辑
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "SysTable",
        props: ['data'],
        data() {
            return {
                sysDatas: []
            }
        },
        methods:{
            edit(row){
                this.$emit('edit', {...row})
            }
        }
    }
</script>

<style scoped>

</style>