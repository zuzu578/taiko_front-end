import { BoardListType } from "../types/BoardListType";

const BoardListRendering = (data:any) => {
   
    return(
        <div>
            {data.boardData.length === 0 ? '게시글이 존재하지 않습니다.' : 
            data.boardData.map((item:BoardListType)=>{
                return(
                    <div>
                        {item.userProfile}
                        {item.userName}
                        {item.createdTime}
                        {item.contents}
                        {item.file_name}
                        {item.file_path}
                    </div>
                )
            })
            
            }
        </div>
    )
}

export {BoardListRendering};