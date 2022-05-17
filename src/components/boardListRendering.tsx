import { BoardListType } from "../types/BoardListType";
import { useState } from "react";
import { BoardCommentForm } from "./boardCommentForm";

import { isMediaFileCheck } from "../utils/changeGenreToJapanese/isMediaFileCheck";

import { deleteBoard } from "../apis/deleteBoard";

const BoardListRendering = (data:any) => {
    console.log('data',data);
    return(

        <div>
        {data?.boardData?.length === 0 ? '게시글이 존재하지 않습니다.' : 
            data?.boardData?.map((item:BoardListType)=>{
                return(
                    <div className="boardList">
                        <div className="userProfile_001">
                            <img src={item?.userProfile}/>{item?.userName} {item?.createdTime}
                            <button onClick={()=>{deleteBoard(item?.boardNo)}} className="w-btn w-btn-pink" type="button">
                                삭제  
                            </button>
                        </div>
                            
                        <div className="contents">
                            {item?.contents}
                        </div>
                        <div className="boardImage">
                            {item?.file?.fileName && isMediaFileCheck(item?.file?.fileName) !== 'mp4'? 
                            <div className="userUploadImage">
                                <img src={item?.file?.filePath +item?.file?.fileName}/> 
                            </div>: ''}
                            {isMediaFileCheck(item?.file?.fileName) === 'mp4' ? 
                             <video width="750" height="500" controls >
                                <source src={item?.file?.filePath +item?.file?.fileName} type="video/mp4"/>
                            </video>
                            
                            : ''}
                            
                        </div>
                        <BoardCommentForm boardNo ={item?.boardNo}/>
                    </div>
                )
            })
            
            }
        </div>
    )
}

export {BoardListRendering};