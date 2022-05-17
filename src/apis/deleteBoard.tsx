import axios from "axios";

const deleteBoard = (idx : any ) => {
    axios.delete('')
    .then((res)=>{
        alert('삭제되었습니다.');
    })
    .catch((err)=>{
        alert('삭제에 실패했습니다.');
    })

}


export {deleteBoard};