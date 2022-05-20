import axios from "axios";

const getFileData = (pageNum : number) => {
    return new Promise((resolve,reject)=>{
        resolve(axios.get(`http://localhost:8080/selectTja?pageNum=${pageNum}`));
    })
}

export { getFileData };