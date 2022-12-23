import React from 'react'
import { Container } from './styles';

const SelectVideo = ({name, author, views, img, url, chosenVideo, setChosenVideo}) => {
  return (
    <Container onClick={()=>setChosenVideo(url)}>
              <img src={img} className='left'/>
        <div className='right'>
          <h3>{name}</h3>
          <p>{author}</p>
          <p>{views} views</p>
        </div>
    </Container>
  )

  
}

export default SelectVideo