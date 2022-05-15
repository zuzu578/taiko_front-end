import { BoardListType } from "../types/BoardListType";


const BoardListRendering = (data:any) => {
   
    return(
        <div>
            {data.boardData.length === 0 ? '게시글이 존재하지 않습니다.' : 
            data.boardData.map((item:any)=>{
                
                return(
                    <div className="boardList">
                        <div className="userProfile_001"><img src={item.userProfile}/>{item.userName} {item.createdTime}</div>
                        
                        
                        <div className="contents">
                        {item.contents}
                        </div>
                        <div className="boardImage">
                        {item.file?.file_name ? <div className="userUploadImage"><img src={item.file?.file_path +item.file?.file_name}/> </div>: ''}

                        </div>
                        
                        
                       
                    </div>
                )
            })
            
            }
        </div>
    )
}

export {BoardListRendering};