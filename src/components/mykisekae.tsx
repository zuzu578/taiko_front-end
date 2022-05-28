import { useEffect, useState } from 'react';
import { getUserCostume } from '../apis/getUserCostume';
import { UserCostumeType } from '../types/UserCostumeType';
const MyKisekae = () =>{
    const [getCostume,setCostume] = useState([{}]);
    useEffect(()=>{
        const url = new URL(window.location.href);
        const urlParams = url.searchParams;
        const userIdx : any = urlParams.get('user_no');
        getUserCostume(userIdx)
        .then((res:any)=>{
        res.data.map((item:any)=>{
                //delete item.costumeUrl
                //console.log(item.costumeUrl.replace("HtmlImage[<img src=","").replace('"',"").replace('">]','').replace('srctmp="','').replace('amp;',''));
                item.trimUrl = item.costumeUrl.replace("HtmlImage[<img src=","").replace('"',"").replace('amp;','').replace('">]','').replace('srctmp="','').replace('amp;','').replace(' ','');
                delete item.costumeUrl;
                
                
            }) 
            console.log(res.data);
            setCostume(res.data);

        })
        .catch((e)=>{
            e.message;
        })
    },[])
    return(
        <div>
            <img src='https://donderhiroba.jp/imgsrc_kisekae.php?cos=4&type=1'/>
            {getCostume.map((item:any)=>{
                return(
                    <div>
                        <div className='image_0005'>
                        <img src={`https://donderhiroba.jp/${item.trimUrl}`}/>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export {MyKisekae};