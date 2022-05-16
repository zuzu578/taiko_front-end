import { BoardListType } from "../types/BoardListType";
import { useState } from "react";
import { BoardCommentForm } from "./boardCommentForm";
const BoardListRendering = (data:any) => {

    return(
        <div>
            {data.boardData.length === 0 ? '게시글이 존재하지 않습니다.' : 
            data.boardData.map((item:BoardListType)=>{
                
                return(
                    <div className="boardList">
                        <div className="userProfile_001"><img src={item.userProfile}/>{item.userName} {item.createdTime}</div>
                        <div className="contents">
                            {item.contents}
                        </div>
                        <div className="boardImage">
                            {item.file?.fileName ? <div className="userUploadImage"><img src={item.file?.filePath +item.file?.fileName}/> </div>: ''}
                        </div>
                        <BoardCommentForm boardNo ={item.boardNo}/>
                    </div>
                )
            })
            
            }
        </div>
    )
}

export {BoardListRendering};