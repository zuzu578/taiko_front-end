import { useState, useEffect } from 'react';
import defaultImage from "../assets/스크린샷 2022-05-01 오전 1.25.21.png";
import { getBoardList } from '../apis/getBoardList';
import { BoardListRendering } from './boardListRendering';
import test from "../assets/test.mp4";
import { writeBoard } from '../apis/writeBoardApi';
import axios from 'axios';

const BoardWrite = (userObject:any) => {

  const [isUploaded ,setIsUploaded] = useState(0);
  const [boardList , setBoardList] = useState([{}]);
  // 초기 페이징 설정값 
  const [pageNum , setPageNum] = useState(0);
  
  const [getContentsValue, setContents] = useState('');


  useEffect(()=>{
    getBoardList(pageNum)
    .then((res:any)=>{
        setBoardList(res.data);    
    })
    .catch((error)=>{
        error.message;
    })
  },[isUploaded]);
    //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  const [file , setFile] = useState();

  // 파일 저장
  const saveFileImage = (e:any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files);
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  


  const getContents = (e:any) => {
    setContents(e.target.value);
  }
  



const writeBoard2 = (contentsValue : string , file:any,userObject:any ) =>{
  setContents("")
  
  if(!window.Kakao.Auth.getAccessToken() && Object.keys(userObject.userObject.userObject).length === 0){
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
      frm.append("file","test!!!!@#21#!@#12312312312312");
  }else{
      frm.append("file", file[0]);
  }

  
  axios.post('http://localhost:8080/postBoard', frm, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
  .then((res: any) => {
      console.log(res);
      setIsUploaded(isUploaded+1);
    

  })
  .catch((error) => {
      error.message;
  })
}


  
  
    return(
        <div className="write_form">
           <div className ="userProfile">
               {userObject.userObject.userObject.thumbnail_image_url ? <img src={userObject.userObject.userObject.thumbnail_image_url}/> : 
               
               <img src={defaultImage}/>}
               
                <input type='text'placeholder="무슨일이 일어나고 있나요?" onChange={getContents}/>
              
           </div>
           {fileImage && (
               <div className="preview">
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                  </div>
                )}
          
           <input type="file" onChange={saveFileImage}/>  <button onClick={()=>{writeBoard2(getContentsValue,file,userObject)}} className="w-btn w-btn-blue" type="button">
            게시
        </button>
    <BoardListRendering boardData ={boardList}/>
    <source src={test} type="video/mp4"/>
    
    </div>
        
    )
    

}



export {BoardWrite};