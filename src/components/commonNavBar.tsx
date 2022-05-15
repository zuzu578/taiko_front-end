import { KakaoAuth } from "../apis/kakaoAuthUrl";
import { logOut } from "../apis/kakaoAuthLogOut";
import kakao_login_image from "../assets/kakao_login_small.png";
import { Button } from "react-bootstrap";
const CommonNavBar = (userObject:any) =>{
    
   //<button onClick={KakaoAuth}> login </button>
    return(
        <nav className="nav_bar">
            <div className="nav_imgs">
                <img src='https://taiko.namco-ch.net/taiko/images/common/logo_nijiiro.png'/>
            </div>
            <div className="nav_items">
                <span className="para">遊び方</span>
            </div>
            <div className="nav_items">
                <span className="para">遊べるお店</span>
            </div>
            <div className="nav_items">
                <span className="para"><a href='/'>楽曲リスト</a></span>
            </div>
            <div className="nav_items">
                {window.Kakao.Auth.getAccessToken() ?  <Button variant="danger" onClick={logOut}>logout</Button>:<div className="login" onClick={KakaoAuth}><img src={kakao_login_image}/></div>}
            </div>
            <div className="nav_items">
                {window.Kakao.Auth.getAccessToken() ?
                 <div className="user_profile">
                     <img src={userObject.userObject.thumbnail_image_url}/>
                     <span className="userName">{userObject.userObject.nickname}</span>
                </div>: ''
                 
                 }
            </div>
        </nav>

        
    )
}
export {CommonNavBar};