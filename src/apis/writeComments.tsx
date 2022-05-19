import axios from "axios";
import { UserType } from "../types/UserType";

const writeComments = (boardNo:any,getComments:string,password:string,userObject:UserType,file:any) => { 
    
    const frm = new FormData();
    frm.append("boardNo",boardNo.boardNo);
    frm.append("userName",userObject.nickname);
    frm.append("userProfile",userObject.thumbnail_image_url);
    frm.append("comments",getComments);
    frm.append("password",password);

    if(!getComments){
        alert("댓글을 입력해주세요.");
        return;
    }
    
    if(!password){
        alert("비밀번호를 입력해주세요.");
        return;
    }

  
    if(file === undefined){
        frm.append("file","");
    }else{
        frm.append("file", file[0]);
    }
  
    
    axios.post('http://localhost:8080/comments', frm, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res: any) => {
        console.log(res);
      
    })
    .catch((error) => {
        error.message;
    })

    return true;
  }

export { writeComments };