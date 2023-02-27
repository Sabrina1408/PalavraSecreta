import { useState } from 'react';
import './StartScreen.css';
import audioSrc from '../assets/audio/click.wav';

const StartScreen = ({startGame}) => {
    const [audio] = useState(new Audio(audioSrc));
    audio.volume = 0.3;
    const handleStartGame = () => {
        audio.play();
        startGame();
    }
    return (
        <div className='start'>
            <h1>Palavra secreta</h1>
            <p>Clique no botão para começar a jogar!</p>
            <button onClick={handleStartGame}>Começar</button>
        </div>
  )
}

export default StartScreen;