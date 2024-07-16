import React, { useState } from "react";
import { useEffect } from "react";

const Contenedor = () => {
  const [numbersUsuario, setNumbersUsuario] = useState([]);
  const [numbersJuego, setNumbersJuego] = useState([0]);
  //const [disableButton, setdisableButton] = useState(true)


  const handleChange = (id) => {
    setNumbersUsuario((prevStateArray) => [...prevStateArray, id]);
  };

const [changePadding, setchangePadding] = useState([false,false,false,false])


  
  useEffect(() => {
    setTimeout(() => {

        const arraysAreEqual = (arr1, arr2) => {
            return (
              arr1.length === arr2.length &&
              arr1.every((value, index) => value === arr2[index])
            );
          };
      
          if (arraysAreEqual(numbersUsuario, numbersJuego)) {
            console.log("sigue sigue");
            setNumbersJuego((prevStateArray) => [
              ...prevStateArray,
              Math.floor(Math.random() * 4),
            ]);


          } else {
            console.log("perdiste!");
            // setNumbersUsuario([])
            // setNumbersJuego([0])
          }

          console.log(numbersJuego);
     }, 500)

    // setdisableButton(!disableButton)
    
  }, [numbersUsuario]);



  const backgroundColors = ["red", "green", "blue", "yellow"];





  return (
    <div>
      {console.log(numbersUsuario)}
      {console.log(numbersJuego)}

      <div style={{ padding: "20px" }}>
        <h1>numero usuario{numbersUsuario}</h1>
        <h1>numero juego {numbersJuego}</h1>

        {backgroundColors.map((number, index) => (
 
          <button
            key={index}
            style={{
              backgroundColor: backgroundColors[index],
              padding: index == numbersJuego[index] ? "40px" : "20px",
              margin: "20px",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleChange(index);
            }}
            disabled = {false}
          >
            boton {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contenedor;
