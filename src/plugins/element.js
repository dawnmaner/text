import Vue from 'vue'

import { Button, Dropdown, DropdownMenu, DropdownItem,Menu, Submenu, MenuItemGroup, MenuItem, Form, FormItem, Input, Message, Table, TableColumn, Dialog, MessageBox, Pagination, Select, Option,Switch,Transfer} from 'element-ui'

// install Vue.component() 注册全局组件
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Transfer)


// Vue.component() ==> template

// this.$message
// this.$confirm()
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
