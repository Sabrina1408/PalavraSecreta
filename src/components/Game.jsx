import { useState, useRef } from 'react';
import './Game.css';
import audioSrc from '../assets/audio/click.wav';

const Game = ({
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score, 
  verifyLetter}) => {
  
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    audio.play();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus(); /*Pra não sair do input quando der enter  */
  }
  const [audio] = useState(new Audio(audioSrc));
  audio.volume = 0.3;
  const handleStartGame = () => {
    audio.play();
  }

  return (
    <div className='game'>
      <section>
        <h2 className="points">Pontuação: <span>{score}</span></h2>
        <h2 className="wrongLettersContainer">Letras:
          {wrongLetters.map((l, i) => ( //Dentro do h2?
            <span key={i} className="wrongLetters"> {l} -</span>
          ))}
        </h2>
      </section>
      <section>
        <h1>Adivinhe a palavra!</h1>
      </section>
      <section>
        <p className='tip'>Dica: <span>{pickedCategory}</span></p>
        <p className='attemptsLeft'>Tentativas restantes: <span>{guesses}</span></p>
      </section>
      <section className='wordContainer'>
        {letters.map((l, i) => (
          guessedLetters.includes(l) ? (
            <div key={i} className='letter'>{l}</div>
          ) : (
            <div key={i} className='blankSquare'></div>
          )
        ))}
      </section>
      <section className='letterContainer'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter} 
            ref={letterInputRef}
          /> {/* className='guessSquare' */}
          <button onClick={handleStartGame} className="gameButton">Chutar</button> {/* onClick={verifyLetter} */}
        </form>
      </section>
    </div>
  )
}

export default Game;