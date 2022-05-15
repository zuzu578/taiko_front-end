import axios from "axios";

const getBoardList = () =>{
    return new Promise((resolve , reject)=>{
        resolve(axios.get('http://localhost:8080/board'));

    })
}

export {getBoardList};