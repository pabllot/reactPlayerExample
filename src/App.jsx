import './App.css'
import video from './assets/example.mp4'
import { IoMdPlay, IoMdPause } from 'react-icons/io'
import { MdVolumeOff } from 'react-icons/md'
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'
import { CgScreenWide, CgScreen } from 'react-icons/cg'
import { useState, useRef } from 'react'
import { GoUnmute } from 'react-icons/go'

function App() {
  const [isVideoPaused, setIsVideoPaused] = useState(true)
  const [isTheaterMode, setIsTheaterMode] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(true)

  const vidRef = useRef(null)
  const fullScreenRef = useRef(null)


  const toggleTheaterMode = () => {
    setIsTheaterMode(prev => !prev)
  }
  
  const toggleFullScreen = () => {

    setIsFullScreen(prev => !prev)    
    if (!isFullScreen)document.exitFullscreen()
    else fullScreenRef.current.requestFullscreen()
  }

  const togglePlay = () => {
    isVideoPaused ? vidRef.current.play() : vidRef.current.pause();
    setIsVideoPaused(prev => !prev)
  }

  return (
    <div  className="App">
      <div ref={fullScreenRef} className={`video-container paused  ${isTheaterMode ? "theater" : ""}`}>
        <div className='video-controls-container'>
          <div className="timeline-container"></div>
          <div className="controls">
            <button onClick={togglePlay}>{!isVideoPaused ? <IoMdPause /> : <IoMdPlay />}</button>
            <div className='volume-container'>
              <button onClick={togglePlay}>{isVideoPaused ? <GoUnmute /> : <MdVolumeOff />}</button>
              <input className='volume-slider' type='range' min='0' max='1' step='any' defaultValue='1'></input>
            </div>
            <button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide/> : <CgScreen />}</button>
            <button onClick={toggleFullScreen}>{ isFullScreen ? <BiFullscreen /> : <BiExitFullscreen/>}</button>
          </div>
        </div>
        <video ref={vidRef} src={video} loop type='video/mp4'></video>
      </div>
    </div>
  )
}

export default App
