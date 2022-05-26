import axios from 'axios';
const loginHiroba = (mail:string , password:string)=> { 
    
    const frm = new FormData();

    frm.append("userId",mail);
    frm.append("userPassowrd",password);
    
    return new Promise((resolve,reject)=>{
        resolve(
            axios.post("http://localhost:8080/login", {
                userId: mail,
                userPassowrd: password
            })
        )
    })
}

export {loginHiroba};