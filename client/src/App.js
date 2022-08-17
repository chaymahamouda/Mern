
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameBar from './components/GameBar';
import GameList from './components/GameList';
import Home from './components/Home';
import{useDispatch} from "react-redux";
import { getgames } from './js/gameSlices/gameSlice';
import GameAdd from './components/GameAdd';

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getgames());
  }, [ping])
  
  return (
    <div className="App">
     <GameBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/games" element={<GameList ping={ping} setping={setping}/>}/>
      <Route path="/add" element={<GameAdd ping={ping} setping={setping}/>}/>
     </Routes>
    </div>
  );
}

export default App;
