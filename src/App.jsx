import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Video from './Components/Video/Video'
import kids1 from './assets/vids/kids1.mp4'
import './App.css'


const App = () => {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [chosenVideo, setChosenVideo] = useState(kids1);


  return (
    <div className='big-wrapper'>
        <Video isTheaterMode={isTheaterMode} setIsTheaterMode={setIsTheaterMode} chosenVideo={chosenVideo} setChosenVideo={setChosenVideo} />
         {!isTheaterMode && <Sidebar chosenVideo={chosenVideo} setChosenVideo={setChosenVideo} /> }
    </div>
  )
}

export default App