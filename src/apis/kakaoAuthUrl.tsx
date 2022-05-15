import { useEffect } from "react";

const CLIENT_ID = "b8d396e2d223b997a25b3b7e464c0dff";
const REDIRECT_URI =  "http://localhost:3000";

const KakaoAuth = () => {

        window.Kakao.Auth.login({
          // success는 인증 정보를 응답(response)으로 받는다. 
          success: function (response: { access_token: any }) {
           //카카오 SDK에 사용자 토큰을 설정한다.
            window.Kakao.Auth.setAccessToken(response.access_token);
            console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
            if (!window.Kakao.isInitialized()) {
                // JavaScript key를 인자로 주고 SDK 초기화
                window.Kakao.init('080ed0265a3c8e4b8f06cd67edeb0355');
                // SDK 초기화 여부를 확인하자.
                console.log(window.Kakao.isInitialized());
              }
            window.location.reload();
          },
          fail: function (error: any) {
            console.log(error);
          },
        });


        

      

     
}

export {KakaoAuth};
//export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;