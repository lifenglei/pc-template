/*
 * @Description: 接口请求
 * @Autor: lifenglei
 * @Date: 2020-09-07 15:47:06
 */
import axios from 'axios'
import qs from 'qs'
export default (params, type) => {
  let config = {}
  config.url = params.url || {}
  config.withCredentials = true
  config.method = params.method || 'get'
  config.baseURL = params.baseURL || ''
  if (type === 'FormData') {
    // 解决文件上传问题
    config.headers = {
      'Content-Type': 'multipart/form-data'
    }
    config.method = 'post'
    config.data = params.data
  } else {
    if (config.method === 'get') {
      config.params = params.data || {}
    } else if (config.method === 'post') {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      config.data = qs.stringify(params.data || {})
    }
  }
  return new Promise((resolve, reject) => {
    axios(config).then(
      res => {
        resolve(res.data)
      },
      error => reject(error)
    )
  })
}
