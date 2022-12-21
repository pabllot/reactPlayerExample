import './App.css'
import video from './assets/example.mp4'

function App() {

  return (
    <div className="App">
      <div className='video-container'>
        <video src={video} controls ></video>
      </div>
    </div>
  )
}

export default App
