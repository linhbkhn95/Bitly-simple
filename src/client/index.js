import axios from axios 
import {apiBase} from './config'

var request =  axios.create({
    baseURL: apiBase,
    headers: {
      // "Accept": 'application/json',
      'x-language': 'vi',
    },
});

export const get = (endpoint,config ={})=>{
     return request.get(endpont,config)
}
export const post = (endpoint,data,config={})=>{
    return request.get(endpont,data,config)
}