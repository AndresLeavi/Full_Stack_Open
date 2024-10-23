import logo from './logo.png'
import './App.css';
import Buttons from './Buttons/Buttons';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';



const  App  = () => { 

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [all, setAll] = useState(0)
const [positive, setPositive] = useState(0)
const [average, setAverage] = useState(0)

const handleGood = () => { 
  const updatedGood = good + 1;
  const updatedAll = updatedGood + bad + neutral;
  setGood(updatedGood); 
  setAll(updatedAll);
  updateStatistics(updatedGood, bad, neutral, updatedAll);
};

const handleNeutral = () => { 
  const updatedNeutral = neutral + 1;
  const updatedAll = good + bad + updatedNeutral;
  setNeutral(updatedNeutral);
  setAll(updatedAll);
  updateStatistics(good, bad, updatedNeutral, updatedAll);
};

const handleBad = () => { 
  const updatedBad = bad + 1;
  const updatedAll = good + updatedBad + neutral;
  setBad(updatedBad);
  setAll(updatedAll);
  updateStatistics(good, updatedBad, neutral, updatedAll);
};

const handleDev = () => {
  setGood(0);
  setNeutral(0);
  setBad(0);
  setAll(0);
  setAverage(0);
  setPositive(0);
};

const updateStatistics = (good, bad, neutral, all) => {
  const avg = all > 0 ? (good - bad) / all : 0;
  const posPercent = all > 0 ? (good / all) * 100 : 0;
  setAverage(avg.toFixed(2)); // Redondear a 2 decimales
  setPositive(posPercent.toFixed(2)); // Redondear a 2 decimales
};

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Give Feedback</h1>
      <div className="button-container">
        <Buttons event={handleGood} text="Good" />
        <Buttons event={handleNeutral} text="Neutral" />
        <Buttons event={handleBad} text="Bad" />
        <Buttons event={handleDev} text="Reset" />
      </div>

      <div className="stats-container">
          <h2>Statistics</h2>
          {all === 0 ? (  // Renderiza el mensaje si no hay feedback
            <div>
              <h4>No feedback given</h4>
            </div>
          ) : (  // Renderiza las estadísticas si hay feedback
            <div>
              <Statistics content={good} text="Good" />
              <Statistics content={neutral} text="Neutral" />
              <Statistics content={bad} text="Bad" />
              <Statistics content={all} text="All" />
              <Statistics content={average} text="Average" />
              <Statistics content={`${positive}%`} text="Positive" />
            </div>
          )}
        </div>
      </header>
  </div>
);
};
export default App;
