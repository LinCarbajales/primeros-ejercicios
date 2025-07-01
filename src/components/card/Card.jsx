import React from 'react'
import './Card.css';

const Card = ({ nombre, profesion, foto, descripcion, color, onClick }) => {
  const claseCard = `card ${color}`;

  return (
    <div className={claseCard} onClick={onClick}>
      <img 
        src={foto} 
        alt="Foto de perfil" 
        className="foto"
      />
      <h2 className="nombre">{nombre}</h2>
      <p className="profesion">{profesion}</p>
      <p className="descripcion">{descripcion}</p>
    </div>
  );
};

export default Card;