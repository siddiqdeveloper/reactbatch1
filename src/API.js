import axios from "axios"
const API = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const getList = (val,callback) =>{
    
    return API.get('posts/'+val).then( (res)=>{
        return  callback(res);
    } )
}