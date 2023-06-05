import React, { useState, useEffect } from "react";

const ContadorTiempo = () => {
  const [minutos, setMinutos] = useState(5);
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (corriendo) {
      intervalo = setInterval(() => {
        if (segundos === 0) {
          if (minutos === 0) {
            clearInterval(intervalo);
            setCorriendo(false);
          } else {
            setMinutos((prevMinutos) => prevMinutos - 1);
            setSegundos(59);
          }
        } else {
          setSegundos((prevSegundos) => prevSegundos - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [corriendo, minutos, segundos]);

  const handleInicioClick = () => {
    setCorriendo(true);
  };

  const handlePausaClick = () => {
    setCorriendo(false);
  };

  const handleReinicioClick = () => {
    setMinutos(5);
    setSegundos(0);
    setCorriendo(false);
  };

  return (
    <div>
      <h1>Contador de Tiempo</h1>
      <div>
        <span>{minutos < 10 ? "0" + minutos : minutos}</span>:
        <span>{segundos < 10 ? "0" + segundos : segundos}</span>
      </div>
      <button onClick={handleInicioClick}>Inicio</button>
      <button onClick={handlePausaClick}>Pausa</button>
      <button onClick={handleReinicioClick}>Reinicio</button>
    </div>
  );
};

export default ContadorTiempo;
