import axios from 'axios'



let instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{
        'Authorization':''
    }
});

instance.interceptors.response.use(response=>{
    return response
},(error => {
    if (error.response.status === 401){
        localStorage.clear();
        if(window.location.pathname !== '/')
           window.location.href = '/'
    }
}));

class BasicRequests {
    create(url,body){
        return instance.post(url,body,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    }

    get(url){
        return instance.get(url,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    }

    update(url,body){
        return instance.put(url,body,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    }

    delete(url){
        return instance.delete(url,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
    }
}

let Request = new BasicRequests();

export default Request;