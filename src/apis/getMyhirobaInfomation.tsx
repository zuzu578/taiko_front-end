import axios from "axios";

const getMyhiroba = (userMail : string) =>{
    return new Promise((resolve , reject)=>{
        resolve(axios.get(`http://localhost:8080/myPage?userMail=${userMail}`))
    })
}

export {getMyhiroba};