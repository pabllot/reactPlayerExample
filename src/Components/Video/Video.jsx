import { useState, useRef, useEffect } from 'react'
import { IoMdPlay, IoMdPause, MdVolumeOff, BiFullscreen, BiExitFullscreen, CgScreenWide, CgScreen, GoUnmute} from '../../assets/reactIconsImport';
import { Container } from './styles';
import penaltis from '../../assets/vids/cats3.mp4'

const Video = ({isTheaterMode, setIsTheaterMode}) => {
  const [isVideoPaused, setIsVideoPaused] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [isMute, setIsMute] = useState(true)
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [speed, setSpeed] = useState(1)




  const vidRef = useRef(null)
  const fullScreenRef = useRef(null)
  const volumeRef = useRef(null)

  const toggleTheaterMode = () =>  setIsTheaterMode(prev => !prev);

  const toggleMute = () => {
    setIsMute(prev => !prev)
    isMute ? vidRef.current.volume = 0 : vidRef.current.volume = 1;
    isMute ? volumeRef.current.value = 0 : volumeRef.current.value = 1
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

 // ajustar volume de acordo com a barrinha
 const  handleRange= (e)=>{
    if(e.target.value < 0.02) vidRef.current.volume = 0, setIsMute(false);
    else if(e.target.value > 0 && e.target.value < 0.6) vidRef.current.volume = 0.4, setIsMute(true)
    else vidRef.current.volume = 1
    }


  // Se os segundos começarem com zero exemplo 01:03. Isso ajeita, senao fica 01:3.
  const startWithZero = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
    })

  // formatando a duração de vídeo, pq recebe milisegundos e nao em formato de hora 
  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
      return `${minutes}:${startWithZero.format(seconds)}`
      } else {
        return `${hours}:${startWithZero.format(minutes)}:${startWithZero.format(seconds)}`
      }
   }

   //mudar velocidade do video
   const changeSpeed = () => {
    let newSpeed = vidRef.current.playbackRate + 0.25
    if (newSpeed > 2) newSpeed = 0.25
    vidRef.current.playbackRate = newSpeed
    setSpeed(newSpeed)
   }

   // para mostrar a barrinha carregando conforme o tempo passa  
   const width = 100 / parseInt(duration?.replace(':', '')) * parseInt(currentTime?.replace(':', ''))


  return (
    <Container>
      <div ref={fullScreenRef} className={`video-container paused  ${isTheaterMode ? "theater" : ""}`}>
        <div className='progress' style={{width: `${width}%`}}></div>
        <div className='video-controls-container'>
          <div className="timeline-container"></div>
          <div className="controls">
            <button onClick={togglePlay}>{!isVideoPaused ? <IoMdPause /> : <IoMdPlay />}</button>

            <div className='volume-container'>
              <button onClick={toggleMute}>{isMute ? <GoUnmute /> : <MdVolumeOff />}</button>
              <input ref={volumeRef} onInput={(e) => handleRange(e)} className='volume-slider' type='range' min='0' max='1' step='any' defaultValue='1'></input>
            </div>

            <div className='duration-container'>
              <div className='current-time'>{currentTime}</div>/
              <div className='total-time'>{duration}</div>
            </div>

            <button onClick={changeSpeed} className='speed-btn wider-btn'>{speed}x</button>
            <button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide/> : <CgScreen />}</button>
            <button onClick={toggleFullScreen}>{ isFullScreen ? <BiFullscreen /> : <BiExitFullscreen/>}</button>
          </div>
        </div>
        <video ref={vidRef} onTimeUpdate={()=>setCurrentTime(formatDuration(vidRef?.current?.currentTime))} onLoadedMetadata={()=>setDuration(formatDuration(vidRef?.current?.duration))} 
        src={penaltis} loop type='video/mp4'></video>
      </div>
    </Container>
  )
}

export default Video
