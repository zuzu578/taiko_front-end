import axios from "axios";

const getBoardList = (pageNum:number) =>{
    return new Promise((resolve , reject)=>{
        resolve(axios.get(`http://localhost:8080/board?pageNum=${pageNum}`));

    })
}

export {getBoardList};