import React from 'react'
import { Container } from './styles';

const SelectVideo = ({name, author, views, img}) => {
  return (
    <Container>
      
        <img src={img} className='left'/>
        <div className='right'>
          <h3>{name}</h3>
          <p>{author}</p>
          <p>{views}</p>
          <p>novo</p>
        </div>
    </Container>
  )
}

export default SelectVideo