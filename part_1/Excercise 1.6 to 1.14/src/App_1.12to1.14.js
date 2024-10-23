import './css/styles.css';
import { useState } from 'react';

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
  ];

  const reactions = ['😊', '❤️', '😂', '😮', '😢', '😡']; // Reacciones posibles

  const [votes, setVotes] = useState(
    anecdotes.map(() => Array(reactions.length).fill(0)) // Inicializa los votos para cada reacción
  );

  const [userReactions, setUserReactions] = useState(
    anecdotes.map(() => null) // Inicializa el estado de reacciones del usuario
  );

  const [selected, setSelected] = useState(0); // Índice de la anécdota actual

  const handleNextAnecdote = () => {
    setSelected((prevSelected) => (prevSelected + 1) % anecdotes.length);
  };

  const handlePrevAnecdote = () => {
    setSelected((prevSelected) => (prevSelected - 1 + anecdotes.length) % anecdotes.length);
  };

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = (reactionIndex) => {
    const currentReaction = userReactions[selected]; // Reacción actual del usuario

    const updatedVotes = [...votes]; // Copia el array de votos

    // Si el usuario ya reaccionó, resta el voto anterior
    if (currentReaction !== null) {
      updatedVotes[selected][currentReaction] -= 1; // Resta el voto anterior
    }

    updatedVotes[selected][reactionIndex] += 1; // Incrementa el nuevo voto
    setVotes(updatedVotes); // Actualiza el estado de votos

    const updatedUserReactions = [...userReactions]; // Copia el estado de reacciones del usuario
    updatedUserReactions[selected] = reactionIndex; // Actualiza la reacción del usuario
    setUserReactions(updatedUserReactions); // Actualiza el estado de userReactions
  };

  return (
    <div className="center-content">
      <div className="anecdote">
        <p>{anecdotes[selected]}</p>
      </div>
      <div>
        {reactions.map((reaction, index) => (
          <span key={index} style={{ marginRight: '10px', cursor: 'pointer' }}>
            <button onClick={() => handleVote(index)} style={{ fontSize: '24px', border: 'none', background: 'none' }}>
              {reaction}
            </button>
            <span>{votes[selected][index]}</span>
          </span>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrevAnecdote} style={{ marginLeft: '10px' }}>Prev Anecdote</button>
        <button onClick={handleNextAnecdote} style={{ marginLeft: '10px' }}>Next Anecdote</button>
        <button onClick={handleRandomAnecdote} style={{ marginLeft: '10px' }}>Random Anecdote</button>
      </div>
    </div>
  );
};

export default App;