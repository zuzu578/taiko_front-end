import { useState } from 'react';
import { commonAxios } from '../apis/commonAxios';
import { SongList } from './songList';

const SongListBanner = () => {

    const songGenreList : Array<String> = ["pops","kids","anime","vocalo","game","variety","classic","namco"] ;
    const imgUrl : String = "https://taiko.namco-ch.net/taiko/images/songlist/btn_";
    
    const [getGenre,setGenre] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    
    const changeGenre = (genre:String)  =>{

        if(genre === 'pops'){
            setGenre('ポップス');
        }
        if(genre === 'kids'){
            setGenre('キッズ');
        }
        if(genre === 'anime'){
            setGenre('アニメ');
        }
        if(genre === 'vocalo'){
            setGenre('ボーカロイド™曲');
        }
        if(genre === 'game'){
            setGenre('ゲームミュージック');
        }
        if(genre === 'variety'){
            setGenre('バラエティ');
        }
        if(genre === 'classic'){
            setGenre('クラシック');
        }
        if(genre === 'namco'){
            setGenre('ナムコオリジナル');
        }

        setIsSelected(true);
       
       
        
    }
    
    return(
        <div>
            <header className="header_image">
                <img src = "https://taiko.namco-ch.net/taiko/images/songlist/tit_songlist.png"/>
            </header>
            <nav className="songNav">
                <ul>
                {songGenreList.map((item)=>{
                    return(
                        <li onClick={() => {changeGenre(item)}}><img src={`${imgUrl}${item}.png`}/></li>
                    )
                })}
                 </ul>
            </nav>
            {isSelected ? 
            <div className="tit">
                <span>{getGenre}</span>
            </div> : ""}
            
            <p className='caution'>
                ※ SECRET! マークの楽曲は、バナパスポートカードを使用して、獲得条件をクリアすると遊べるようになります。
                ※収録楽曲は、国や地域によって異なる場合があります。
            </p>

            <SongList genre={getGenre} isSelected = {isSelected}/>

        </div>
    )

}

export {SongListBanner};