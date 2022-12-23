import React, { useEffect, useState } from 'react'
import SelectVideo from '../SelectVideo/SelectVideo';
import { Container } from './styles';
import { vids } from '../Database/Data'

const Sidebar = ({setChosenVideo, chosenVideo}) => {
  const [filter, setFilter] = useState('kids');
  const [filteredVids, setFilteredVids] = useState([]);

  useEffect(()=>{
    setFilteredVids([])
      for(let i = 0; i < vids.length; i++){
        if(vids[i].genre === filter) setFilteredVids(prev => [...prev, vids[i]])  
    }
  },[filter])

  return (
    <Container>
      <div className='sidebar'>
        <div className='filter'> 
          <button className='button' onClick={()=>setFilter('kids')}>kids</button>
          <button className='button' onClick={()=>setFilter('cats')}>cats</button>
          <button className='button' onClick={()=>setFilter('dogs')}>dogs</button>
          <button className='button' onClick={()=>setFilter('soccer')}>soccer</button>
        </div>
       {filteredVids.slice(0, 5).map(item=><SelectVideo setChosenVideo={setChosenVideo} chosenVideo={chosenVideo} url={item.url} key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} />       
       )}
 
      </div>
    </Container>
  )
}

export default Sidebar