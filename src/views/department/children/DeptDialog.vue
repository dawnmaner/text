<template>
    <el-dialog :title="title" :visible.sync="visible" :before-close="beforeClose">
        <el-form :model="newForm">
            <el-form-item label="部门名称" label-width="80px">
                <el-input v-model="newForm.name" placeholder="请输入部门名称" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门编号" label-width="80px">
                <el-input v-model="newForm.sn" placeholder="请输入部门编号" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="beforeClose()">取 消</el-button>
            <el-button type="primary" @click="submit()">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "DeptDialog",
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            form: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                newForm: {}
            }
        },
        watch: {
            form(newVal, oldVal) {
                if (newVal) {
                    //
                    this.newForm = {...newVal}
                }
            }
        },
        methods: {

            submit() {
                this.$emit('closeDialog', {...this.newForm})
                this.newForm = {}
            },
            beforeClose() {
                this.$emit('closeDialog')
                this.newForm = {}
            }
        }
    }
</script>

<style scoped>

</style>