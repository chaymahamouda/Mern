import React from 'react'
import { useDispatch } from 'react-redux'
import { deletegame } from '../js/gameSlices/gameSlice';
import GameUpdate from './GameUpdate';

const GameCard = ({game, ping, setping}) => {
  const dispatch= useDispatch();
  return (
    <div className='card'>
        <img src= {game.image} alt={game.name}/>
        <div className='card-content'>
            <h1>{game.name}</h1>
            <p>{game.release_date}</p>
            <p>{game.rate}</p>
            <button onClick={()=>{dispatch(deletegame(game._id)); setping(!ping)}}>delete</button>
            <GameUpdate  ping={ping} setping={setping}  id={game._id}/>

        </div>
    </div>
  )
}

export default GameCard