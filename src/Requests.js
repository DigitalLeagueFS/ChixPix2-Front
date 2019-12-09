import axios from 'axios'


let instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{
        'Authorization':''
    }
});


class BasicRequests {
    create(url,body){
        return instance.post(url,body)
    }

    get(url){
        return instance.get(url)
    }

    update(url,body){
        return instance.put(url,body)
    }

    delete(url){
        return instance.delete(url)
    }
}

let Request = new BasicRequests();

export default Request;