import React from 'react'
import { Container } from './styles';
import bunny from '../../assets/bunny.png'

const SelectVideo = () => {
  return (
    <Container>
        <img src={bunny} className='left'/>
        <div className='right'>
          <h3>Titulo de duas linha pelo menos</h3>
          <p>Nome autor</p>
          <p>NUm visualizações</p>
          <p>novo</p>
        </div>
    </Container>
  )
}

export default SelectVideo