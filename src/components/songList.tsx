import { useEffect, useState } from 'react';
import { commonAxios } from '../apis/commonAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const SongList = (genre:any) =>{  

    const URL : string = "http://localhost:8080/songList?songGenre=";
    const difficultyImgUrl : string = 'https://taiko.namco-ch.net/taiko/images/songlist/ico_difficulty_';
    const imgExtends : string = '.png';
    const difficulty :Array<string> = ['1','2','3','4','5'];

    const [getSongList,setSongList] = useState([{songName:""},{difficulty:""}]);

    useEffect(()=>{
        commonAxios(URL,genre)
        .then((res)=>{
            console.log('data',res.data);
            setSongList(res.data);
    
        })
        .catch((error)=>{
            error.message();
        })
    },[genre])


return(
        <div>
            {genre.isSelected ? 
             <Table striped bordered hover>
             <thead>
                 <tr>
                     <th><p className='table_head'>曲名</p></th>
                     <th>
                         <p className='table_head'>難易度</p>
                         {difficulty.map((item)=>{
                             return(
                                 <th><img src={`${difficultyImgUrl}${item}${imgExtends}`}/></th>
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
                             <td>{item.difficulty}</td>
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