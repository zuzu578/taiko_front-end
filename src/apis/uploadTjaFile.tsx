import { FileUploadType } from "../types/FileUploadType";
import { uploadSongFile } from "./uploadSongFile";

const uploadFile = (paramMap:FileUploadType) => {
    uploadSongFile(paramMap)
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        error.message;
    })
}

export {uploadFile};