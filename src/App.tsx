import { useEffect, useState } from 'react'
import { SongListBanner } from './components/songListBanner'
import { CommonNavBar } from './components/commonNavBar'
import { BoardList } from './components/boardList'
import { getUserKakaoProfile } from './apis/getUserKakaoProfile'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';


const App = () => {
  
  const [isLogined , setIsLogined] = useState(false);

  useEffect(()=>{
    getUserKakaoProfile(function(result:any){
      console.log('result', result);
    })
   
  },[])

  return (
    <div className="App">
      <CommonNavBar isLogined ={isLogined} />
      
      <Routes>
      <Route path="/"  element={<SongListBanner />}/>

      <Route path="/board"  element={<BoardList />}/>
      </Routes>
     
      

    </div>
  )
}

export default App
