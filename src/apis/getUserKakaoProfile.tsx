import axios from "axios";

const getUserKakaoProfile = (callback:any) =>{

    window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (kakao_account: { age_range: any; profile: any }) {
            //console.log(kakao_account);
            return callback(kakao_account)
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
    
}

export {getUserKakaoProfile};