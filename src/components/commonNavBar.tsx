import { KakaoAuth } from "../apis/kakaoAuthUrl";
import { logOut } from "../apis/kakaoAuthLogOut";
const CommonNavBar = (isLogined:any) =>{
   
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
                {window.Kakao.Auth.getAccessToken() ? <button onClick={logOut}> logout </button> :<button onClick={KakaoAuth}> login </button>}
                
            </div>
        </nav>

        
    )
}
export {CommonNavBar};