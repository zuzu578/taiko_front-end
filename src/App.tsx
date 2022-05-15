import { useEffect, useState } from 'react'
import { SongListBanner } from './components/songListBanner'
import { CommonNavBar } from './components/commonNavBar'
import { BoardList } from './components/boardList'
import { getUserKakaoProfile } from './apis/getUserKakaoProfile'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';


const App = () => {
  
const [userObject ,setUserObject] = useState({});
  

  useEffect(()=>{
    getUserKakaoProfile(function(result:any){
      setUserObject(result.kakao_account.profile);
    })
   
  },[])

  return (
    <div className="App">
      <CommonNavBar userObject={userObject}/>
      <Routes>
      <Route path="/"  element={<SongListBanner />}/>
      <Route path="/board" element={<BoardList userObject={userObject}/>}/>
      </Routes>
     
      

    </div>
  )
}

export default App
