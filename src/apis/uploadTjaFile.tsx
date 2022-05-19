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
   
    if(paramMap.file === undefined || paramMap.file === null){
        alert('파일이 첨부되지않았습니다.');
        return 
    }else{
        frm.append("file", paramMap.file[0]);
    }
    if(!paramMap.comment){
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

    })
    .catch((error) => {
        error.message;
    })
}

export {uploadFile};