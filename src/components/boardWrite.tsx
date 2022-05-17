import { useState, useEffect } from 'react';
import defaultImage from "../assets/스크린샷 2022-05-01 오전 1.25.21.png";
import { getBoardList } from '../apis/getBoardList';
import { BoardListRendering } from './boardListRendering';
import test from "../assets/test.mp4";
import axios from 'axios';
import { Loading } from './loadingSpinner';

const BoardWrite = (userObject:any) => {

  const [isUploaded ,setIsUploaded] = useState(0);
  const [boardList , setBoardList] = useState([{}]);
  // 초기 페이징 설정값 
  const [pageNum , setPageNum] = useState(0);
  const [getContentsValue, setContents] = useState('');
  const [isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    getBoardList(pageNum)
    .then((res:any)=>{
        setBoardList(res.data); 
        setIsLoading(false);   
    })
    .catch((error)=>{
        error.message;
    })
  },[isUploaded]);

  // 다음페이지 
  const getNextBoard = () =>{
  
    console.log('setPage' , pageNum);
    setPageNum(pageNum + 1);
    getBoardList(pageNum).
    then((res:any)=>{
      setBoardList(res.data)
      console.log('page! ===>',pageNum)
      if(res.data.content.length === 0){
       setPageNum(pageNum);
        return ;
      }
    })
    .catch((error)=>{error.meessage})
  }

  // 이전페이지 

  const getPreviousBoard = () =>{
    
    if(Math.sign(pageNum) === -1 ||pageNum <0){
      return;
    }else{
      setPageNum(pageNum-1);
    }
    getBoardList(pageNum).then((res:any)=>{setBoardList(res.data)}).catch((error)=>{error.meessage})
  }
  

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
  setContents("");
  console.log('userObject.userObject.userObject',userObject.userObject.userObject);
  setPageNum(0);
  if(!window.Kakao.Auth.getAccessToken() || Object.keys(userObject.userObject.userObject).length === 0){
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

        {isLoading ? <Loading/> : <>  
              <BoardListRendering boardData ={boardList}/>
          <source src={test} type="video/mp4"/>
          <div className='pageNation'>
                <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={getPreviousBoard}>Previous</button>
                </li>
                
                <li className="page-item">
                  <button className="page-link" onClick={getNextBoard}>Next</button>
                </li>
              </ul>
      </nav>
    </div></>}
 
    </div>
    
        
    )
    

}





export {BoardWrite};