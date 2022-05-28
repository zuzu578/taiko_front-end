import axios from "axios"

const getUserCostume = (userIdx : string) =>{
    return new Promise((resolve , reject)=>{
        resolve(axios.get(`http://localhost:8080/getCostume?userIdx=${userIdx}`));
    })
}

export {getUserCostume};