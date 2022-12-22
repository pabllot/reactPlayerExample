import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Video from './Components/Video/Video'
import './App.css'
import SelectVideo from './Components/SelectVideo/SelectVideo'


const App = () => {
  const [isTheaterMode, setIsTheaterMode] = useState(false)

  return (
    <div className='big-wrapper'>
        <Video isTheaterMode={isTheaterMode} setIsTheaterMode={setIsTheaterMode} />
         {!isTheaterMode && <Sidebar /> }
    </div>
  )
}

export default App