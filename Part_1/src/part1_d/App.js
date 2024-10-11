import { useState } from "react";

// const App = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)

//     return (
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh', // ocupa toda la altura de la pantalla
//           gap: '20px' // espacio entre los elementos
//         }}>
//           <div>{left}</div>
//           <button onClick={() => setLeft(left + 1)}>
//             left
//           </button>
//           <button onClick={() => setRight(right + 1)}>
//             right
//           </button>
//           <div>{right}</div>
//         </div>
//       )
//   }

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleReset = () => {
    setClicks({
      left: 0,
      right: 0,
    });
  };
  //   const handleLeftClick = () => {
  //     const newClicks = {
  //     //   left: clicks.left + 1,
  //     //   right: clicks.right,
  // //---------------------------------------
  //     ...clicks,
  //     left: clicks.left + 1
  //     };
  //         setClicks(newClicks);
  //   };

  //   const handleRightClick = () => {
  //     const newClicks = {
  //     //   left: clicks.left,
  //     //   right: clicks.right + 1,
  //     ...clicks,
  // //----------------------------------------
  //     right: clicks.right + 1
  //     };
  //     setClicks(newClicks);
  //   };


  //PROHIBIDO HACER ESTO

//   const handleLeftClick = () => {
//     clicks.left++
//     setClicks(clicks)
//   }

//Está prohibido en React mutar el estado directamente, ya que puede provocar efectos secundarios inesperados. El cambio de estado siempre debe realizarse estableciendo el estado en un nuevo objeto. Si las propiedades del objeto de estado anterior no se modifican, simplemente deben copiarse, lo que se hace copiando esas propiedades en un nuevo objeto y estableciendo eso como el nuevo estado.



  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // ocupa toda la altura de la pantalla
        gap: "10px", // espacio entre los elementos
      }}
    >
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  );
};

export default App;
