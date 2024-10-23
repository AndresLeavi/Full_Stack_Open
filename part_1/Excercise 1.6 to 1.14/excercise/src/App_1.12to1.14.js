import { useState } from 'react';
import './css/styles.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // Estado para votos: cada anécdota tiene un objeto que almacena los votos
  const [votes, setVotes] = useState(
    anecdotes.map(() => ({ good: 0, neutral: 0, bad: 0 }))
  );
  
  const [selected, setSelected] = useState(0); // Índice de la anécdota actual

  // Función para avanzar a la siguiente anécdota
  const handleNextAnecdote = () => {
    setSelected((prevSelected) => (prevSelected + 1) % anecdotes.length);
  };

  // Función para mostrar una anécdota aleatoria
  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Función para votar por la anécdota actual
  const handleVote = (type) => {
    const updatedVotes = [...votes]; // Copia el array de votos
    updatedVotes[selected][type] += 1; // Incrementa el voto según el tipo
    setVotes(updatedVotes); // Actualiza el estado de votos
  };

  return (
    <div className="center-content">
      <p>{anecdotes[selected]}</p>
      <p>Good: {votes[selected].good}</p>
      <p>Neutral: {votes[selected].neutral}</p>
      <p>Bad: {votes[selected].bad}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleVote('good')}>Good</button>
        <button onClick={() => handleVote('neutral')} style={{ marginLeft: '10px' }}>Neutral</button>
        <button onClick={() => handleVote('bad')} style={{ marginLeft: '10px' }}>Bad</button>
        <button onClick={handleNextAnecdote} style={{ marginLeft: '10px' }}>Next Anecdote</button>
        <button onClick={handleRandomAnecdote} style={{ marginLeft: '10px' }}>Random Anecdote</button>
      </div>
    </div>
  );
};

export default App;