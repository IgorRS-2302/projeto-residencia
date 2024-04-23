import {Axios} from 'axios';


const localURL = 'http://localhost:3000/user'
const axios = new Axios;

export class LoginService{
    login(){
        axios.get(localURL, {
            params:{
                id: 5
            }
        }
        ).then((res)=>console.log(res)).catch((err)=> console.log(err))
    }

}