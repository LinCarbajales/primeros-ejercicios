import React from 'react';
import './Botoncito.css';

const Botoncito = ({ texto, color, onClick }) => {
  const claseBoton = `botoncito ${color}`;

  return (
    <button className={claseBoton} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botoncito;