
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
import { useState } from "react";
      
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });



//   const handleReset = () => {
 
//     setClicks({
//       left: 0,
//       right: 0,
//     });
//   };


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



  //   const handleLeftClick = () => 
  //     setClicks({...clicks, left: clicks.left + 1 });
    

  //   const handleRightClick = () => setClicks({ 
  //     ...clicks, 
  //     right: clicks.right + 1 });
      


  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh", // ocupa toda la altura de la pantalla
  //         gap: "10px", // espacio entre los elementos
  //       }}
  //     >
  //       {clicks.left}
  //       <button onClick={handleLeftClick}>Left</button>
  //       <button onClick={handleReset}>Reset</button>
  //       <button onClick={handleRightClick}>Right</button>
  //       {clicks.right}
        
  //     </div>
  //   );
  // };

  //------------------------------------------------------

  //Renderizado condicional 

  const History = (props) => { 
    if (props.allClicks.length === 0) {
      return (
        <div>
          The app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        Button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const App = () => {
    const [clicksLeft, setLeft] = useState({left:0})
    const [clicksRight, setRight] = useState({right:0})
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState({total:0})
  
    const handleLeftClick = () => {
      setTotal({...total,
        total: total.total + 1
      })
      setAll(allClicks.concat('L'))
      setLeft({...clicksLeft,
        left: clicksLeft.left + 1})
  
    }
  
    
    const handleRightClick = () => {
      setTotal({...total,
        total: total.total + 1
      })
      setAll(allClicks.concat('R'))
      setRight({...clicksRight,
        right: clicksRight.right + 1})
  
    }

    const handleResetClick = () => {
      setAll([])
      setRight({right:0})
      setLeft({left:0})
      setTotal({total:0})
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Alinea los elementos de arriba hacia abajo
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Ocupa toda la altura de la pantalla
          gap: "10px", // Espacio entre los elementos
        }}
      >
        {/* Este div contiene los botones left y right, y se organizan en una fila */}
        <div
          style={{
            display: "flex", // Alinea los botones y contadores horizontalmente
            gap: "10px", // Espacio entre los botones y contadores
          }}
        >
          <div>{clicksLeft.left}</div>
          <Button handleClick={handleLeftClick} text='Left'>Left</Button>
          <Button handleClick={handleResetClick} text='Reset'>Reset</Button>
          <Button handleClick={handleRightClick} text='Right'>Right</Button>
          <div>{clicksRight.right}</div>
        </div>
    
        {/* Elementos debajo de los botones */}
        <History  allClicks={allClicks}/>
        <div>total {total.total}</div>
      </div>
    );
  }
export default App;
