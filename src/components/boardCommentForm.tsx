import { useState } from "react";
import Modal from 'react-modal';

const BoardCommentForm = (boardNo:any) =>{
   
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const reply = () => {
        setModalIsOpen(true);
        console.log('boardNo => ' , boardNo);
    }
    return(
        <div>
             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>      
                        댓글을 작성해보세요 ..<br/>
                    <input type="text"/>
                    <button className="w-btn w-btn-blue" onClick={reply}type="button">게시</button>
            </Modal>
            <div className="reply">
                <button className="w-btn w-btn-blue" onClick={()=>{reply()}}type="button">댓글</button>
            </div>

        </div>
    )
}

export {BoardCommentForm};