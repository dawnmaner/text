<template>
    <div>
        <div>
            <el-button type="success" @click="add">添加</el-button>
        </div>
        <sys-table
                :data="sysDatas"
                @edit="edit"
        />
        <!--<sys-pagination-->
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
        <sys-dialog
            :title="title"
            :visible="visible"
            :form="newForm"
            @beforeClose="beforeClose"
            @submit="submit"
        />
    </div>
</template>

<script>
    import SysTable from './children/SysTable'
    // import SysPagination from './children/SysPagination'
    import SysDialog from './children/SysDialog'
    import ManaPagination from '@/components/pagination/ManaPagination'
    import {getSysDicts, editSysDicts, addSysDicts} from '@/request/api'

    export default {
        name: "SystemDict",
        data() {
            return {
                sysDatas: [],
                title: '数据字典编辑',
                visible: false,
                newForm: {
                    title: '',
                    sn: '',
                    intro: ''
                },
                currentPage: 1,
                total: 0,
                pageSize: 5
            }
        },
        components: {
            SysTable,
            // SysPagination,
            SysDialog,
            ManaPagination
        },
        methods: {
            getSysDictsFn() {
                getSysDicts({
                    pageSize: this.pageSize,
                    currentPage: this.currentPage
                }).then(res => {
                    if (res.success === true) {
                        this.sysDatas = res.data.list
                        this.total = res.data.total

                    }
                })
            },
            handleSizeChange(size){
                this.pageSize = size
                this.getSysDictsFn()
            },
            handleCurrentChange(page){
                this.currentPage = page
                this.getSysDictsFn()
            },
            add() {
                // 弹窗显示
                this.visible = true
                this.title = '数据字典添加'
            },
            edit(row) {
                // 控制弹窗显示
                this.visible = true
                // 把子组件传递过来的数据绑定在弹窗里面的el-form
                this.newForm = {...row}
            },
            submit(data) {
                // 弹窗隐藏
                this.visible = false
                // 1.
                // return console.log(this.newForm)
                if (data.id) {
                    // 编辑操作
                    editSysDicts({
                        id: data.id,
                        title: data.title,
                        sn: data.sn,
                        intro: data.intro
                    }).then(res => {
                        if (res.success === true) {
                            this.getSysDictsFn()
                        }
                    })
                } else {
                    // 添加操作
                    addSysDicts({
                        title: data.title,
                        sn: data.sn,
                        intro: data.intro
                    }).then(res => {
                        if (res.success === true) {
                            this.getSysDictsFn()
                        }
                    })
                }
                this.newForm = {}

            },
            // 关闭弹窗
            beforeClose() {
                this.visible = false
                this.newForm = {}
            }
        },
        created() {
            this.getSysDictsFn()
        }
    }
</script>
<style scoped>

</style>