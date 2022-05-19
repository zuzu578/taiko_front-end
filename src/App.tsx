import { useEffect, useState } from 'react'
import { SongListBanner } from './components/songListBanner'
import { CommonNavBar } from './components/commonNavBar'
import { BoardList } from './components/boardList'
import { getUserKakaoProfile } from './apis/getUserKakaoProfile'
import { FileUploadMain } from './components/fileUploadMain'
import {FileUploadForm} from './components/fileUploadForm';
import { Main } from './components/Main'
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
      <Route path="/main" element={<Main />}/>
      <Route path="/"  element={<SongListBanner />}/>
      <Route path="/board" element={<BoardList userObject={userObject}/>}/>
      <Route path="/fileUpload" element = {<FileUploadMain/>}/>
      <Route path="/fileUploadForm" element ={<FileUploadForm  userObject={userObject}/>}/>
      </Routes>
    </div>
  )
}

export default App
