//登录网络接口
import request from './request'
const preUrl=process.env.NODE_ENV==='development'?'api/coding':''
//部门管理列表
export const getDepartments=(params)=> request.get(`${preUrl}/departments`,{params:params})