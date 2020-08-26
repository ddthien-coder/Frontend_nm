import axios from 'axios'
import { Loading } from 'quasar'
// import { LocalStorage, SessionStorage } from 'quasar'
let loadFunction = config => {
  Loading.show()
  return config
}
let finishFunction = response => {
  Loading.hide()
  return response
}
let errorFunction = error => {
  Loading.hide()
  return Promise.reject(error)
}

const service  = axios.create({
     baseURL: process.env.API, // api的base_url
     timeout: 20000, // request timeout
    //  headers : { 
    //    'Authorization': 'Bearer ' + LocalStorage.getItem('LocalAccessToken') 
    //  }
})

service.interceptors.request.use(loadFunction)
service.interceptors.response.use(finishFunction, errorFunction)

export default service