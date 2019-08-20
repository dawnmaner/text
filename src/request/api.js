import request from './request'
const preUrl = process.env.NODE_ENV === 'development' ? '/api/coding' : ''
// npm run serve => development  preUrl = '/api/coding'
// npm run build => production   preUrl = ''
console.log(process.env.NODE_ENV)
// 上线urlhttp://192.168.113.117:8080/tokens
// 生产环境上url是没有/api/coding
// 登录接口
export const LoginApi = (params) => request.post(`${preUrl}/tokens`, params)
// 部门管理列表
// localhots:8080/api/coding/departments?token=xxx&currentPage=1&pageSize=10
export const getDepartments = (params) => request.get(`${preUrl}/departments`, {params})
// 修改部门管理信息
export const editDepartments = (params) => request.put(`${preUrl}/departments/${params.id}`, params)
// 删除部门信息
export const delDepartments = (params) => request.delete(`${preUrl}/departments/${params.id}`, {params})
// 添加部门信息
export const addDepartments = (params) => request.post(`${preUrl}/departments`, params)
// 字典目录列表
export const getSysDicts = (params) => request.get(`${preUrl}/systemDictionaries`, {params})
// 编辑字典目录
export const editSysDicts = (params) => request.put(`${preUrl}/systemDictionaries/${params.id}`, params)
// 添加字典目录
export const addSysDicts = (params) => request.post(`${preUrl}/systemDictionaries`, params)
//获取员工列表
export const getEmployees=(params)=>request.get
(`${preUrl}/employees`,{params:params})

export const getRoles = (params) => request.get(`${preUrl}/roles`, {params:params})
//添加员工信息
export const addemployees = (params) => request.post(`${preUrl}/employees`, params)