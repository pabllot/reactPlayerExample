import './App.css'
import video from './assets/example.mp4'
import { IoMdPlay, IoMdPause } from 'react-icons/io'
import {CgMiniPlayer} from 'react-icons/cg'
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'
import { CgScreenWide, CgScreen } from 'react-icons/cg'
import { useState, useRef } from 'react'

function App() {
  const [isVideoPaused, setIsVideoPaused] = useState(true)
  const [isTheaterMode, setIsTheaterMode] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const vidRef = useRef(null)

  const toggleMiniPlayer = () => {
    
  }
  const toggleTheaterMode = () => {
    setIsTheaterMode(prev => !prev)
  }
  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev)
  }

  const togglePlay = () => {
    isVideoPaused ? vidRef.current.play() : vidRef.current.pause();
    setIsVideoPaused(prev => !prev)
  }

  return (
    <div className="App">
      <div className={`video-container paused ${isFullScreen ? 'full-screen' : ''} ${isTheaterMode ? "theater" : ""}`}>
        <div className='video-controls-container'>
          <div className="timeline-container"></div>
          <div className="controls">
            <button onClick={togglePlay}>{!isVideoPaused ? <IoMdPause /> : <IoMdPlay />}</button>
            <button onClick={toggleMiniPlayer}>{<CgMiniPlayer/>}</button>
            <button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide/> : <CgScreen />}</button>
            <button onClick={toggleFullScreen}>{<BiFullscreen/>}{<BiExitFullscreen/>}</button>
          </div>
        </div>
        <video ref={vidRef} src={video} loop type='video/mp4'></video>
      </div>
    </div>
  )
}

export default App
