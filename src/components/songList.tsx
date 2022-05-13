import { useEffect, useState } from 'react';
import { commonAxios } from '../apis/commonAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {splitDifficulty} from '../utils/changeGenreToJapanese/splitDifficultyUtils';

const SongList = (genre:any) =>{  

    const URL : string = "http://localhost:8080/songList?songGenre=";
    const difficultyImgUrl : string = 'https://taiko.namco-ch.net/taiko/images/songlist/ico_difficulty_';
    const imgExtends : string = '.png';
    const difficulty :Array<string> = ['1','2','3','4','5'];

    const [getSongList,setSongList] = useState([{songName:""},{difficulty:""}]);

    useEffect(()=>{
        commonAxios(URL,genre)
        .then((res)=>{
           
            setSongList(res.data);
    
        })
        .catch((error)=>{
            error.message();
        })
    },[genre])


return(
        <div className='songListTable'>
            {genre.isSelected ? 
             <Table striped bordered hover style={{backgroundColor: genre.tableColor.tableColor}}>
             <thead>
                 <tr>
                     <th><p className='table_head'>曲名</p></th>
                     <th>
                         <p className='table_head'>難易度</p>
                         {difficulty.map((item)=>{
                             return(
                                 <th><td className='imgTd'><img src={`${difficultyImgUrl}${item}${imgExtends}`}/></td></th>
                             )
                         })}
                    </th>
                 </tr>
             </thead>
             <tbody>
                 {getSongList.map((item)=>{
                     return(
                         <tr>
                             <td><p className='songNamePara'>{item.songName}</p></td>
                             {splitDifficulty(item.difficulty).map((item)=>{
                                 return(
                                     <td>{item}</td>
                                 )
                             })}
                         </tr>
                     )
                 })} 
             </tbody>
         </Table>   
            : ''}
    
        </div>
    )
}




export {SongList};