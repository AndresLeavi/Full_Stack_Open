// import { useState } from "react";

//Componentes con estado

// const App = () => {

//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

//-------------------------------------------------------------------------------

// Control de eventos, Un controlador de eventos es una funcion, Pasando el estado a componentes hijos

// const Display = ({ counter }) => {
//   return <div>{counter}</div>;
// };

const Display = ({ counter }) => <div> {counter} </div>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1);
  };

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0);
  };

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1);
  };

  // console.log("rendering...", counter);

  return (
    <div>
      <div></div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='Plus'/>
      <Button onClick={decreaseByOne} text='Minus'/>
      <Button onClick={setToZero} text='Reset'/>
    </div>
  );
};



export default App;
