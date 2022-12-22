import React from 'react'
import { Container } from './styles';
import bunny from '../../assets/bunny.png'

const SelectVideo = ({name, author, views}) => {
  return (
    <Container>
      
        <img src={bunny} className='left'/>
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