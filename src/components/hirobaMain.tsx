import { useState } from 'react';

import { loginHiroba } from '../apis/loginHiroba';

import { Loading } from './loadingSpinner';
import {Cookies} from 'react-cookie'
import { setCookie } from '../utils/cookie/cookie';


const HirobaMain = (userObject: any) =>{
    const cookie = new Cookies();
    const [isSynced , setIsSynced] = useState(false);
    const [mail ,setMail] = useState('');
    const [password ,setPassword] = useState('');
    const [isSuccess,setIsSuccess] = useState(false);
    const [dataStatus , setDataStatus] = useState('');
    const getEmail = (e:any) => {
        setMail(e.target.value);
    }

    const getPassword = (e:any) => {
        setPassword(e.target.value);
    }

    const doLogin = () =>{
        if(mail === null || mail ==='' || mail === undefined || !mail){
            alert("메일을 입력해주세요.");
            return;
        }
        if(password === null || password ==='' || password === undefined || !password){
            alert("비밀번호를 입력해주세요.");
            return;
        }
        setIsSynced(true);
        loginHiroba(mail,password)
        ?.then((res:any)=>{
            setCookie('account',mail,{path:"/",secure:true,sameSite:'none'});
            console.log(res.data);
            setDataStatus(res.data);
            setIsSynced(false);
            setIsSuccess(true);
        })
        .catch((error)=>{
            error.message;
            alert('아이디 혹은 비밀번호를 확인해주세요.');
            setIsSynced(false);
            setIsSuccess(false);
        
        })
    }
    return(
        <div>
            
            <div className="image_005">
                <img src='https://taiko-ch.net/images/top/slide/slide_ac.jpg'/>
            </div>
            <div className='img_051'>
                <img src='https://taiko.namco-ch.net/taiko/images/donhiro/tit_donhiro.png'/>
            </div>
            <div className="info">
                <h1>ドンダヒロバ連動？</h1>
                <p>
                連動を通じて私の情報をインポートできます。<br/>
                今連動してみてください！<br/>
                ドンダヒロバ
                アカウントで始めましょう！
                </p>
            </div>
           
            <div className="login_form">
            <div className="input-group mb-3">
               <input type="text"onChange={getEmail} className="form-control" placeholder="반다이남코 이메일" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <div className="input-group mb-3">
               <input type="password" onChange={getPassword}className="form-control" placeholder="반다이남코 비밀번호" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <div className='btn'>
               <button type="button" onClick={()=>{doLogin()}} className='btn btn-primary'>連動</button>
           </div>
           {isSynced ? <>연동중입니다. 잠시만 기다려주세요... <Loading/></> : ''} {isSuccess ?<>{dataStatus}</>: ''}
               </div>
           
       
        </div>
    )
}
export {HirobaMain};