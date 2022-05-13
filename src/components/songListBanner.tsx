import { useState } from 'react';
import { commonAxios } from '../apis/commonAxios';
import { SongList } from './songList';
import { TableColorType } from '../types/TableColorType';

const SongListBanner = () => {

    const songGenreList : Array<String> = ["pops","kids","anime","vocalo","game","variety","classic","namco"] ;
    const imgUrl : String = "https://taiko.namco-ch.net/taiko/images/songlist/btn_";
    
    const [getGenre,setGenre] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [tableColor,setTableColor] = useState({fontColor:'',tableColor:''});
    
    const changeGenre = (genre:String)  =>{
        
        const colorObject:TableColorType = {
            fontColor:'',
            tableColor:'',
        };

        if(genre === 'pops'){
            setGenre('ポップス');
            colorObject.fontColor = '#42c0d2';
            colorObject.tableColor = '#a0dfe8';
            
            setTableColor(colorObject);
        }
        if(genre === 'kids'){
            setGenre('キッズ');
            colorObject.fontColor = '#faa401';
            colorObject.tableColor = '#ffdf7f';
            
            setTableColor(colorObject);
        }
        if(genre === 'anime'){
            setGenre('アニメ');
            colorObject.fontColor = '#ff90d3';
            colorObject.tableColor = '#ffc7e9';
            
            setTableColor(colorObject);
        }
        if(genre === 'vocalo'){
            setGenre('ボーカロイド™曲');
            colorObject.fontColor = '#9799a8';
            colorObject.tableColor = '#e6e7ef';
            
            setTableColor(colorObject);
        }
        if(genre === 'game'){
            setGenre('ゲームミュージック');
            colorObject.fontColor = '#aa64cb';
            colorObject.tableColor = '#e5c4f4';
            
            setTableColor(colorObject);
        }
        if(genre === 'variety'){
            setGenre('バラエティ');
            colorObject.fontColor = '#199f6b';
            colorObject.tableColor = '#9fe4bb';
            
            setTableColor(colorObject);
        }
        if(genre === 'classic'){
            setGenre('クラシック');
            colorObject.fontColor = '#c9c000';
            colorObject.tableColor = '#e4df7f';
            
            setTableColor(colorObject);
        }
        if(genre === 'namco'){
            setGenre('ナムコオリジナル');
            colorObject.fontColor = '#ff7027';
            colorObject.tableColor = '#ffb793';
            
            setTableColor(colorObject);
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
                <span style={{color:tableColor.fontColor}}>{getGenre}</span>
            </div> : ""}
            
            <p className='caution'>
                ※ SECRET! マークの楽曲は、バナパスポートカードを使用して、獲得条件をクリアすると遊べるようになります。
                ※収録楽曲は、国や地域によって異なる場合があります。
            </p>

            <SongList genre={getGenre} isSelected = {isSelected} tableColor={tableColor}/>

        </div>
    )

}

export {SongListBanner};