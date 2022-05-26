import axios from 'axios';
const loginHiroba = (mail:string , password:string)=> { 
    if(mail === null || mail ==='' || mail === undefined || !mail){
        alert("메일을 입력해주세요.");
        return;
    }
    if(password === null || password ==='' || password === undefined || !password){
        alert("비밀번호를 입력해주세요.");
        return;
    }
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