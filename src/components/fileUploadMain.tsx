import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getTjaFileList } from '../apis/getTjaFileList';
import { getFileData } from '../apis/getFileData';
const FileUploadMain = () =>{
    const [pageNum , setPageNum] = useState(0);
    const [fileData,setFileData] = useState([]);

    useEffect(()=>{
        getTjaFileList(pageNum)
        .then((res:any)=>{
            setFileData(res.data.content);
            console.log('res.data',res.data.content);
            
        })
        .catch((error)=>{
            error.message;
        })
    },[]);
    
    const goFileUpload = () => {
        window.location.href = '/fileUploadForm';
    }

    const getMoreFileData = () =>{
        setPageNum(pageNum +1 );
        getFileData(pageNum)
        .then((res:any)=>{
            console.log(res.data.content);
            setFileData([...fileData,...res.data.content]);
        })
        .catch((err)=>{
            err.message;
        })

    }
    return(
        <>
        <div className='taiko_image'>
            <img src="https://taiko-ch.net/images/top/slide/bnr_donfes.jpg"/>
        </div>
        <div className="mainForm">
            <div className="title">
                <h1> 太鼓さん次郎　全難易度譜面配布その1 </h1>
            </div>
            <p className="para2">
            初心者から上級者までプレイできる太鼓さん次郎のうｐろだです。<br/>
            主に新ＡＣ（新筐体）のみ収録曲をUP・配布しています。<br/>
            すべてが新配点(2.85～)になってるわけではありません。(2015年以降はすべて旧配点で配布します。)<br/>
            太鼓さん次郎２でプレイする場合、一部プレイできない譜面があります。<br/>
            tjaplayerでプレイする場合、おにのみのプレイとなります。さらに一部配点が未対応(新配点や配点未記入)の曲もありますので各自修正するようお願いします。<br/>
            コメントに音源なしと書いてない限り、すべて音源付きです。<br/>
            ここのアップローダでのリクエストは受け付けていません。<br/>
            ※勝手なアップロードを防ぐため、アップロードパスワードをかけています。<br/>
            ※私の作った創作譜面をそのままの譜面で二次配布するのは禁止です。<br/>
            ※動画のアップロードはご自由に。
            </p>
            <button type="button" onClick={goFileUpload} className="btn btn-light">アップロード</button>

            <div className='list'>

            <Table striped bordered hover>
             <thead>
                 <tr>
                     <th><p className='table_head'>アップローダー</p></th>
                     <th><p className='table_head'>ファイル</p></th>
                     <th> <p className='table_head'>コメント</p></th>
                     <th> <p className='table_head'>日時</p></th>
                 </tr>
             </thead>
             <tbody>
                 {fileData.map((item)=>{
                     return(
                         <tr>
                           <td>
                               {item.userName}
                           </td>
                           <td>
                               <a href={`http://localhost:8080/fileDownload?fileName=${item.fileName}&filePath=${item.filePath}`}> {item.fileName}</a>
                           </td>
                           <td>
                               {item.comments}
                           </td>
                           <td>
                               {item.createdTime}
                           </td>
                         </tr>
                     )
                 })} 
             </tbody>
         </Table> 

            </div>
            <div className='btomBtn'>
                <div className="d-grid gap-2">
                        <button className="btn btn-primary" onClick={()=>{getMoreFileData()}} type="button">もっと見る</button>
                </div>
            </div>
        </div>
        <div className='footer'>
            <img src="https://taiko.namco-ch.net/taiko/images/common/bg_main_sp.png"/>
        </div>
        </>
    )
   
}

export {FileUploadMain};