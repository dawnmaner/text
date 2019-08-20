<template>
    <el-dialog :title="title" :visible.sync="visible" :before-close="beforeClose">
        <el-form :model="newForm">
            <el-form-item label="标题" label-width="80px">
                <el-input v-model="newForm.title" placeholder="请输入部门名称" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="编号" label-width="80px">
                <el-input v-model="newForm.sn" placeholder="请输入部门编号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="简介" label-width="80px">
                <el-input v-model="newForm.intro" placeholder="请输入部门编号" autocomplete="off"></el-input>
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
        name: "SysDialog",
        props: ['title', 'visible', 'form'],
        data() {
            return {
                // title: '',
                // visible: false,
                newForm: {
                    title: '',
                    sn: '',
                    intro: ''
                }
            }

        },
        watch: {
            form(newVal, oldVal) {
                //
                console.log(newVal)
                if (newVal) {
                    this.newForm = {...newVal}
                }
            }
        },
        methods: {
            beforeClose() {
                // 改变父组件传递过来的visible=false
                this.$emit('beforeClose')
            },
            submit() {
                // 把子组件里面修改后的数据传递给父组件
                // console.log(this.newForm)
                this.$emit('submit', this.newForm)
            }
        }
    }
</script>

<style scoped>

</style>