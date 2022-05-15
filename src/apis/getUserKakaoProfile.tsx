import axios from "axios";

const getUserKakaoProfile = () =>{

    return new Promise((resolve,reject)=>{
        resolve(axios.get('https://kapi.kakao.com/v2/user/me'));
    })
    
    
    
}

export {getUserKakaoProfile};