import { useState } from 'react';
const TaikoWikiMain = () => {

    const [getKeyword ,setKeyword] = useState('');
    const findFnc = () => {
        
    }

    const onKeyPress = (e: any) => {
        if(e.key === 'Enter'){findFnc()};
    }

    const getSearchKeyword = (e:any) => {
        setKeyword(e.target.value);
    }
    return(
        <div>
            <div className="wrapper">
                <img src='https://taiko-ch.net/images/top/slide/slide_anime.jpg'/>
            </div>
            <div className="section">
            여러분이 가꾸어 나가는 <strong>태고의달인 위키</strong> <br/>
            <strong>태고의달인 위키</strong>에 오신 것을 환영합니다!<br/>
            <strong>태고의달인 위키</strong>는 누구나 기여할 수 있는 위키입니다.<br/>
            <strong>검증되지 않았거나 편향된 내용이 있을 수 있습니다.</strong><br/>
            </div>
            <div className="search">
                <div className="input-group mb-3">
                    <input type="text" onKeyPress={onKeyPress}  onChange={getSearchKeyword}className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button type="button" onClick={findFnc} className="btn btn-light">find</button>
                </div>
            </div>
            <div className='write'>
                <span><a href=''>이곳을 클릭하여 태고의달인 위키를 작성하실수 있습니다.</a></span>
            </div>

            <footer className="footer">
                 <img src={`https://taiko.namco-ch.net/taiko/images/common/bg_main_sp.png`}/>
            </footer>

        </div>
    )
}

export {TaikoWikiMain};