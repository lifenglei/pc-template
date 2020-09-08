/*
 * @Description: 首页数据
 * @Autor: lifenglei
 * @Date: 2020-09-07 15:51:07
 */
import http from './http'

export const getIndexData = params =>
  http({
    data: params,
    baseURL: '/',
    url: '/itemcity/product?lver=7.8.0'
  })
