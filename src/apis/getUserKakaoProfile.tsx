import axios from "axios";

const getUserKakaoProfile = (callback:any) =>{

    window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (kakao_account: { age_range: any; profile: any }) {

            return callback(kakao_account)
        },
        fail: function (error: any) {
          //console.log('로그인 되지 않음.');
          error.message;
        },
      });
    
}

export {getUserKakaoProfile};