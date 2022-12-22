import React from 'react'
import SelectVideo from '../SelectVideo/SelectVideo';
import { Container } from './styles';
import {vids} from '../data.json'

const Sidebar = () => {
  return (
    <Container>
      <div className='sidebar'>
        <div className='filter'> 
          <button className='button'>Todos</button>
          <button className='button'>Funny</button>
          <button className='button'>Soccer</button>
          <button className='button'>Dunno</button>
        </div>
       {vids.slice(0, 5).map(item=><SelectVideo key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} />       
       )}
 
      </div>
    </Container>
  )
}

export default Sidebar