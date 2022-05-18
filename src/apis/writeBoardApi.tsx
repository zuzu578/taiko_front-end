import axios from "axios";

const writeBoard = (contentsValue : string , file:any,userObject:any) =>{

    if(!window.Kakao.Auth.getAccessToken()){
        alert("글 작성은 로그인후 가능해요.");
        return ;
    }
    if(!contentsValue){
        alert("내용을 입력해주세요.");
        return;
    }
   

    const frm = new FormData();

    frm.append("userName",userObject.userObject.userObject.nickname);
    frm.append("userProfile",userObject.userObject.userObject.thumbnail_image_url);
    frm.append("contents",contentsValue);

    if(file === undefined){
        frm.append("file","");
    }else{
        frm.append("file", file[0]);
    }

    
    axios.post('http://localhost:8080/postBoard', frm, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        error.message;
    })
}

export {writeBoard};