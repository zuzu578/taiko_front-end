import { useState, useEffect } from 'react';
import defaultImage from "../assets/스크린샷 2022-05-01 오전 1.25.21.png";
import { getBoardList } from '../apis/getBoardList';
import { BoardListRendering } from './boardListRendering';

const BoardWrite = (userObject:any) => {
    //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e:any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  
  const [isUploaded ,setIsUploaded] = useState(false);
  const [boardList , setBoardList] = useState([{}]);


  useEffect(()=>{
    getBoardList()
    .then((res:any)=>{
        setBoardList(res.data);
    })
    .catch((error)=>{
        error.message;
    })
  },[isUploaded]);
  
    return(
        <div className="write_form">
           <div className ="userProfile">
               {userObject.userObject.userObject.thumbnail_image_url ? <img src={userObject.userObject.userObject.thumbnail_image_url}/> : 
               
               <img src={defaultImage}/>}
               
                <input type='text'placeholder="무슨일이 일어나고 있나요?"/>
                
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
          
           <input type="file" onChange={saveFileImage}/>  <button className="w-btn w-btn-blue" type="button">
        게시
    </button>

    <BoardListRendering boardData ={boardList}/>
           
        </div>
        
    )
    

}



export {BoardWrite};