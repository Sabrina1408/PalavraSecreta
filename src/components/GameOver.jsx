import './GameOver.css';
import audioSrc from '../assets/audio/click.wav';
import { useState } from 'react';
const GameOver = ({retry, score}) => {
  const [audio] = useState(new Audio(audioSrc));
  audio.volume = 0.3;
  const handleRetry = () => {
    audio.play();
    retry();
  }
  return (
    <div className='gameOver'>
      <h1>Fim de jogo!</h1>
      <h2>Pontuação: <span>{score}</span></h2>
      <button onClick={handleRetry}>Reiniciar</button>
    </div>
  )
}

export default GameOver;