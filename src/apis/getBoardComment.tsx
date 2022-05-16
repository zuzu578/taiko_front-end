import axios from "axios";

const getBoardComment = (boardNo : number) => {
    return new Promise((resolve,reject)=>{
        resolve(axios.get(`http://localhost:8080/boardComment?boardNo=${boardNo}`));
    })
}

export {getBoardComment};