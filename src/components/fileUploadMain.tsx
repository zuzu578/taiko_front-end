import { useEffect } from 'react';
const FileUploadMain = () =>{

    useEffect(()=>{

    },[]);

    const goFileUpload = () => {
        window.location.href = '/fileUploadForm';
    }
    return(
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
        </div>
    )
}

export {FileUploadMain};