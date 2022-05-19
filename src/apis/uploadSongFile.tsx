import axios from "axios";
import { FileUploadType } from "../types/FileUploadType";

const uploadSongFile = (paramMap:FileUploadType) =>{
    return new Promise((resolve,reject)=>{
        resolve(axios.post(''));
    })
}

export {uploadSongFile};