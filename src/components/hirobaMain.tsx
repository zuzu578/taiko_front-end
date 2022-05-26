import { useState } from 'react';

import { loginHiroba } from '../apis/loginHiroba';



const HirobaMain = (userObject: any) =>{
    const [isLoggined , setIsLoggined] = useState(false);
    const [mail ,setMail] = useState('');
    const [password ,setPassword] = useState('');
    const [myData , setMyData] = useState('');
    const getEmail = (e:any) => {
        setMail(e.target.value);
    }

    const getPassword = (e:any) => {
        setPassword(e.target.value);
    }

    const doLogin = () =>{
        loginHiroba(mail,password)
        ?.then((res:any)=>{
            console.log(res.data);
            setMyData(res.data);
            setIsLoggined(true);
        })
        .catch((error)=>{
            error.message;
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
                今連動してみてください！
                </p>
            </div>
           
            <div className="login_form">
            <div className="input-group mb-3">
               <input type="text"onChange={getEmail} className="form-control" placeholder="email" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <div className="input-group mb-3">
               <input type="password" onChange={getPassword}className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"/>
           </div>
           <div className='btn'>
               <button type="button" onClick={()=>{doLogin()}} className='btn btn-primary'>連動</button>
           </div>
               </div>
           
       
        </div>
    )
}
export {HirobaMain};