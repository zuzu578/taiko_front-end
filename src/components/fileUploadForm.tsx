import { uploadFile } from "../apis/uploadTjaFile";
import { useState } from 'react';
import { FileUploadType } from "../types/FileUploadType";

const FileUploadForm = (props : any) =>{

    const [getPassword , setPassWord] = useState('');
    const [getComment, setComment] = useState('');
    const [getFiles, setFiles] = useState();

    const getFile = (e : any) =>{
        setFiles(e.target.file);
    }
    const getCmmnt = (e:any)=>{
        setComment(e.target.value);
    }
    const getPwd = (e:any)=>{
        setPassWord(e.target.value);
    }

    const paramMap :FileUploadType= {
        file : getFiles,
        comment : getComment,
        password : getPassword,
        userObject : props.userObject,
    }

    return(
        <div>
            <div className="fileUploadForm">
                <h5>
                ファイルをアップロードします。<br/>
                アップロード可能な容量は 100.0 MB です。すべてのファイルタイプに対応しています。
                </h5>
            </div>
            <div className="inputForms">
            <div className="input-group mb-3">
                <input type="password" onChange={getPwd} className="form-control" placeholder="password"  aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" onChange={getCmmnt}  className="form-control" placeholder="comment" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text">Upload</label>
                <input type="file" onChange={getFile}  className="form-control" id="inputGroupFile01"/>
            </div>
            <div className="uploadBtn">
                <button type="button" onClick={()=>{uploadFile(paramMap)}} className="btn btn-light">アップロード</button>
            </div>
            <div className="info">
            <h5>
           
            ※私の作った創作譜面をそのままの譜面で二次配布するのは禁止です。<br/>
            ※動画のアップロードはご自由に。
            </h5>
            </div>

            </div>
          

        </div>
    )
}

export {FileUploadForm};