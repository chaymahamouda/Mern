import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

const GameList = ({ping , setping}) => {
  const games = useSelector((state)=> state.game.games);
  return (
    <div className='list'>
      {games? (
        games.map((el)=> <GameCard ping={ping} setping={setping} game={el} />)): (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWo6TRfI5lrw1cD6PNztCeEQx_dwBtp7sbK2USAF7H7y0D8_LkNNp_I9dion8KHIb11s&usqp=CAU"/>
      )}
      
    </div>
  )
}

export default GameList