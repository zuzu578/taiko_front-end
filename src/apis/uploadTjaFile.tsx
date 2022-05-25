import axios from "axios";
import { FileUploadType } from "../types/FileUploadType";

const uploadFile = (paramMap:FileUploadType) => {
    const frm = new FormData();
    const nowDate = new Date();
    console.log('paramMap=======>',paramMap);
    frm.append("comments",paramMap.comment);
    frm.append("password",paramMap.password);
    frm.append("userName",paramMap.userObject.nickname);
    frm.append("createdTime",nowDate.toString());
   
    if(Object.keys(paramMap.userObject).length ===0 || Object.keys(paramMap.userObject).length === null || Object.keys(paramMap.userObject).length === undefined ){
        alert("로그인이 필요합니다.");
        return ;
    }
    if(paramMap.file === undefined || paramMap.file === null){
        alert('파일이 첨부되지않았습니다.');
        return 
    }else{
        frm.append("file", paramMap.file[0]);
    }
    if(paramMap.comment === undefined || paramMap.comment === null){
        alert("설명을 입력해주세요.");
    }
    if(!paramMap.password){
        alert("비밀번호를 입력해주세요.");
    }
    axios.post('http://localhost:8080/uploadTja', frm, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res: any) => {
        if(res.data==="success"){
            alert("정상적으로 업로드되었습니다.");
            window.location.href = '/fileUpload';
        }

    })
    .catch((error) => {
        error.message;
        alert("업로드에 실패했습니다.");
        return;
    })
}

export {uploadFile};