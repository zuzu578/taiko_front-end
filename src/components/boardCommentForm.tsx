import { useState } from "react";
import Modal from 'react-modal';
import { getBoardComment } from "../apis/getBoardComment";
import { BoardCommentType } from "../types/BoardCommentsType";
import { BoardCommentList } from "./boardCommentList";
import like from "../assets/free-icon-like-179655.png";
import dislike from "../assets/free-icon-thumb-down-889220.png";

const BoardCommentForm = (boardNo:any) =>{
    const [boardComment,setBoardComment] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const reply = () => {  
        setModalIsOpen(true);
        getBoardComment(boardNo.boardNo)
        .then((res:any)=>{
            setBoardComment(res.data);
        })
        
    }
    return(
        <div>
             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>      
                        댓글을 작성해보세요 ..<br/>
                    <input type="text"/>
                    <button className="w-btn w-btn-blue" onClick={reply}type="button">게시</button><br/>
                    <div className="fileUpload">
                        <input type="file" onChange={saveFileImage}/>
                                    {fileImage && (
                                        <div className="preview">
                                            <img
                                                alt="sample"
                                                src={fileImage}
                                                style={{ margin: "auto" }}
                                            />
                                            </div>
                         )}
                    </div>
                    {boardComment.length !==0 ? boardComment.map((item:BoardCommentType)=>{
                        return(
                            <div>
                                <div className="userProfile_002">
                                  <img src={item.userProfile}/>{item.userName} {item.createdTime}
                                </div>
                                  <div className="usercontents">
                                      <img src= {item.file.filePath +item.file.fileName}/><br/>
                                      {item.contents}
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