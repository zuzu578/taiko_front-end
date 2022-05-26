
import { getCookie } from "../utils/cookie/cookie";
import { useEffect, useState } from 'react';
import { getMyhiroba } from "../apis/getMyhirobaInfomation";
import { tagReplace } from "../utils/StringUtils/tagReplace";
const MyHirobaPage = () =>{


    const [getHirobaData , setHirobaData] = useState([{}]);
   console.log("cookie!",getCookie('account'));
   useEffect(()=>{
    getMyhiroba(getCookie('account'))
    .then((res:any)=>{
       
        const prefix = ['https://donderhiroba.jp/'];
        const userDanwi = res.data.map((item:any)=>{
            return (item.userDanwi.replace('HtmlImage[','').replace('class','className').replace(']','').replace('>','').replace('src=',"").replace('"',"").replace('"',"").replace('style="height:21px;margin:1px 0;"','').replace('<img',''))
        })
        const userDanwi2 = [...prefix,...userDanwi];
        const myDonImage = res.data.map((item:any)=>{
           return (item.userMydon.replace('HtmlImage[','').replace('class','className').replace(']','').replace('amp;','').replace('<img className="customd_mydon"','').replace('>','').replace('src=',"").replace('"',"").replace('"',"").replace("amp;",""));
        })
        res.data.map((item:any)=>{
            delete item.userMydon
            delete item.userDanwi
            item.userMydon = myDonImage[0];
            item.userDanwi = userDanwi2.join('').replace(' ','');
        })
        setHirobaData(res?.data);
    })
    .catch((e)=>{
        e.message;
    })
   },[]);
   console.log(getHirobaData);
    return(
        <div className="donderHirobaMain">
           
            {getHirobaData.map((item:any)=>{
                return(
                    <>
                    <div className="wrapper">
                    <div className="userStyle">
                        <span className="userstyle">{item.userStyle}</span>
                    </div>
                    <div className="userName">{item.userName} <img src={item?.userDanwi}/><br/></div> 
                    
                    
                     </div>
                     <div className="myDong">
                     <img src={item?.userMydon}/>
                     </div>
                     <div className="scoreArea">
                        <img src="https://donderhiroba.jp/image/sp/640/total_score_image_5.png"/>
                        <div className="coin">
                        <img src="https://donderhiroba.jp/image/sp/640/token_image_9.png"/>
                        <img src="https://donderhiroba.jp/image/sp/640/token_image_1001.png"/>
                    </div>
                    <div className="coinmedal">
                        {item.userToken}
                    </div>
                    
                    <div className="conintitle">
                        ごほうびザクザク2022
                    </div>
                    <div className="donmedalTitle">
                    どんメダル2022春
                    </div>
                    <div className="donMedal">
                        {item.userDonmedal}
                    </div>
                    <div className="userBestRank2">
                        {item.userBestRank2}
                    </div>
                    <div className="userBestRank3">
                    {item.userBestRank3}
                        </div>
                        <div className="userBestRank4">
                        {item.userBestRank4}
                        </div>
                        <div className="userBestRank5">
                        {item.userBestRank5}
                        </div>
                        <div className="userBestRank6">
                        {item.userBestRank6}
                        </div>
                        <div className="userBestRank7">
                        {item.userBestRank7}
                        </div>
                        <div className="userBestRank8">
                        {item.userBestRank8}
                        </div>
                        <div className="userDonderfulCrown">
                        {item.userDonderfulCrown}
                        </div>
                        <div className="userGoldCrown">
                        {item.userGoldCrown}
                        </div>
                        <div className="userSilverCrown">
                        {item.userSilverCrown}
                        </div>
                    </div>
                    
                     </>
                 
                )
            })}
           
        </div>
    )
}
export {MyHirobaPage};