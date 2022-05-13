import { useEffect, useState } from 'react'
import { SongListBanner } from './components/songListBanner'
import { CommonNavBar } from './components/commonNavBar'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CommonNavBar/>
      <SongListBanner/>
    </div>
  )
}

export default App
