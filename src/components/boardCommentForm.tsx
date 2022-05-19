import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { getBoardComment } from "../apis/getBoardComment";
import { BoardCommentType } from "../types/BoardCommentsType";
import { BoardCommentList } from "./boardCommentList";
import like from "../assets/free-icon-like-179655.png";
import dislike from "../assets/free-icon-thumb-down-889220.png";
import { writeComments } from '../apis/writeComments';
import { isMediaFileCheck } from '../utils/changeGenreToJapanese/isMediaFileCheck';
import { getBoardDetail } from '../apis/getBoardDetail';

const BoardCommentForm = (boardNo:any) =>{
    
    const [boardComment,setBoardComment] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [file , setFile] = useState();

    const [getComments , setComments] = useState('');
    const [password , setPassowrd] = useState('');
      //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");

    const [boardDetail,setBoardDetail] = useState([]);


    // 파일 저장
    const saveFileImage = (e:any) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files);
    };
const reload=()=>window.location.reload();
    
  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

    const reply = () => {  
        setModalIsOpen(true);
        getBoardComment(boardNo.boardNo)
        .then((res:any)=>{
            setBoardComment(res.data);
            getBoardDetail(boardNo.boardNo)
            .then((res:any)=>{
                setBoardDetail(res.data);
            }).catch((error)=>{
                error.message;
            })
        }).catch((error)=>{
            error.message;
        })
        
    }
    const getComment = (e:any) =>{
        setComments(e.target.value);
    }
    const getPassword = (e:any) =>{ 
        setPassowrd(e.target.value);
    }
    return(
        <div>
             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>    
             <div className='boardDetail'>
                    {boardDetail.map((item)=>{
                        console.log('itemlist======>',item);
                        return(
                        <div>
                        <div className='userProfile_003'>
                            <img src={item.userProfile}/> {item.userName}{item.createdTime}

                         </div>
                         <div className='contents'>
                            {item.contents}
                            </div>
                            <div className="media">
                                {item.file !== null && item.file !== undefined ? 
                                 <>
                                    {isMediaFileCheck(item.file.fileName) === 'mp4' ?
                                <video width="500" height="400" controls >
                                    <source src={`${item.file.filePath}${item.file.fileName}`} type="video/mp4"/>
                                </video> : 
                                <img
                                    alt="sample"
                                    src={`${item.file.filePath}${item.file.fileName}`}
                                    style={{ width:"300px"} }
                                />}
                                
                                </> : ''}
                                
                                </div>
                         
                                </div>  
        
                        )
                    })}
                    </div>  
                        댓글을 작성해보세요 ..<br/>
                    <input type="text" placeholder='댓글을 작성해보세요!' onChange={getComment}/><br/>
                    <input type="password" placeholder='비밀번호를 입력해주세요.' onChange={getPassword}/>
                    <button className="w-btn w-btn-blue" onClick={()=>{writeComments(boardNo,getComments,password,boardNo.data.userObject.userObject.userObject,file)}}type="button">게시</button><br/>
                    <div className="fileUpload">
                        <input type="file" onChange={saveFileImage}/>
                        {fileImage && (
                            <div className="preview">
                                {isMediaFileCheck(file[0].name) === 'mp4' ?
                                <video width="500" height="400" controls >
                                    <source src={fileImage} type="video/mp4"/>
                                </video> : 
                                <img
                                    alt="sample"
                                    src={fileImage}
                                    style={{ width:"300px"} }
                                />}
                                
                                </div>
                            )}

                  
                    </div>
                    {console.log("boardComment!!!!!!!===>",boardComment)}
                    {boardComment!==null && boardComment?.length !==0   ? boardComment?.map((item:BoardCommentType)=>{
                        return(
                            <div>
                                <h1>ㄴ</h1>
                                <div className="userProfile_002">
                                  <img src={item?.userProfile}/>{item?.userName} {item?.createdTime}
                                </div>
                                  <div className="usercontents">
                                      <>  {console.log(isMediaFileCheck(item.fileName))}</>
                                            {console.log(item)}
                                  {item?.fileName && isMediaFileCheck(item?.fileName) !== 'mp4'? 
                                        <div className="userUploadImage">
                                            <img src={item?.filePath +item?.fileName}/> 
                                        </div>: ''}
                                        {isMediaFileCheck(item?.fileName) === 'mp4' ? 
                                        <video width="750" height="500" controls >
                                            <source src={item?.filePath +item?.fileName} type="video/mp4"/>
                                        </video>
                            
                                    : ''}
                                    <br/>
                                      {item?.contents}
                                  </div>
                                 

                            </div>
                        )
                    }) : <div>댓글이 없습니다! 처음으로 댓글을 달아보세요 😅</div>}
                    
            </Modal>
            <div className="reply">
                <button className="w-btn w-btn-blue" onClick={()=>{reply()}}type="button">댓글</button>
                <span className="likeBtn"><img src ={like}/> </span><span className="disLike"><img src={dislike}/></span>
            </div>

        </div>
    )
}

export {BoardCommentForm};