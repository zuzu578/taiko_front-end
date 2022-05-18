import axios from "axios";

const getBoardDetail = (boardNo:any) => {
    return new Promise((resolve , reject)=>{
        resolve(axios.get(`http://localhost:8080/boardDetail?boardNo=${boardNo}`));
    })
}

export {getBoardDetail};