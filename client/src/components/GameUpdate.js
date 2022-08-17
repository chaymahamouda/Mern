import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updategame } from '../js/gameSlices/gameSlice';

const GameUpdate = ({id , ping, setping}) => {
  const [game, setgame] = useState({});
  const [show, setshow] = useState(false);
  const dispatch= useDispatch();
  return (
    <div>
      <button onClick={()=>setshow(!show)}>update game</button>
      {show ?(
        <div className='update'>
          <button onClick={()=>setshow(!show)}>X</button>
        <p>Name:</p>
        <input type="text" onChange={(e)=>setgame({...game, name:e.target.value})}/>
        <p>Category:</p>
        <select onChange={(e)=>setgame({...game, category:e.target.value})}>
        <option value="moba">moba</option>
        <option value="fps">fps</option>
        <option value="tps">tps</option>
        <option value="rpg">rpg</option>
        <option value="arcade">arcade</option>
        </select>
        <p>Date:</p>
        <input type="date"onChange={(e)=>setgame({...game, release_date:e.target.value})}/>
        <p>Image:</p>
        <input type="text" onChange={(e)=>setgame({...game, image:e.target.value})}/>
       <button onClick={()=>{
        dispatch(updategame({id:id,game}));
        setping(!ping);
        setshow(!show);
      }} >Update game</button>  
      </div>):null}

    
    </div>
  );
      };

export default GameUpdate