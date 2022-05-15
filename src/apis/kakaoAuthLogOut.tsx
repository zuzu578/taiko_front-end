const logOut = () => {

    const isLogOut = confirm('로그아웃 하시겠습니까?');

    if(isLogOut){
    window.Kakao.isInitialized();

    if (!window.Kakao.Auth.getAccessToken()) { // 토큰이 있는지 확인 (토큰 가져와보기)
      console.log('Not logged in.');
      return;
    }

    window.Kakao.Auth.logout(function() { // 카카오 로그아웃
      console.log(window.Kakao.Auth.getAccessToken());
      window.location.reload();
    });
   
    }
   

}

export {logOut};