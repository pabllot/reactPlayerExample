import { useState, useRef } from 'react'
import video from './assets/example.mp4'
import { IoMdPlay, IoMdPause, MdVolumeOff, BiFullscreen, BiExitFullscreen, CgScreenWide, CgScreen, GoUnmute} from './assets/reactIconsImport';
import './App.css'

function App() {
  const [isVideoPaused, setIsVideoPaused] = useState(true)
  const [isTheaterMode, setIsTheaterMode] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [isMute, setIsMute] = useState(true)
  const [volume, setVolume] = useState(1)


  const vidRef = useRef(null)
  const fullScreenRef = useRef(null)
  const volumeRef = useRef(null)

   const toggleMute = () => {
    setIsMute(prev => !prev)
    isMute ? vidRef.current.volume = 0 : vidRef.current.volume = 1
    }

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
              <button onClick={toggleMute}>{isMute ? <GoUnmute /> : <MdVolumeOff />}</button>
              <input ref={volumeRef} onInput={(e) => setVolume(e.target.value)} className='volume-slider' type='range' min='0' max='1' step='any' defaultValue='1'></input>
            </div>
            <button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide/> : <CgScreen />}</button>
            <button onClick={toggleFullScreen}>{ isFullScreen ? <BiFullscreen /> : <BiExitFullscreen/>}</button>
          </div>
        </div>
        <video ref={vidRef}  src={video} loop type='video/mp4'></video>
      </div>
    </div>
  )
}

export default App
