import React from 'react'
import SelectVideo from '../SelectVideo/SelectVideo';
import { Container } from './styles';


const Sidebar = () => {
  return (
    <Container>
      <div className='sidebar'>
        <SelectVideo />
        <SelectVideo />
        <SelectVideo />
        <SelectVideo />
        <SelectVideo />
 
      </div>
    </Container>
  )
}

export default Sidebar