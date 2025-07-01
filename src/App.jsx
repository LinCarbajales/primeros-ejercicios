import './App.css';
import Botoncito from './components/botoncito/Botoncito';
import Card from './components/card/Card';

function App() {
  const manejarClick = (elemento) => {
    alert(`Has hecho clic en el ${elemento}`);
  };

  return (
    <>
      <h1>Ejercicio de React</h1>
      <Botoncito texto="Botón 1" color="rojo" onClick={() => manejarClick("botón rojo.")} />
      <Botoncito texto="Botón 2" color="verde" onClick={() => manejarClick("botón verde.")} />
      <Botoncito texto="Botón 3" color="azul" onClick={() => manejarClick("botón azul.")} />
       <div className="card-container">
      <Card nombre="Lin Carbajales" profesion="Escritora de terror" color="verde" foto="./src/assets/lin.jpg"
        descripcion="Fan del terror de videoclub y autora de Inhumano, la novela ganadora del II premio Lestat de Dimensiones Ocultas."
        onClick={() => manejarClick("el perfil de Lin.")}
      />
      <Card nombre="Marisol Mancera" profesion="Desarrolladora web full stack" color="azul" foto="./src/assets/marisol.jpg"
        descripcion="Cuidadora de gatos, diseñadora y desarrolladora de la nueva y mejorada web de Videoclub 85, negocio de Gijón."
        onClick={() => manejarClick("el perfil de Marisol.")}
      />
      <Card nombre="Milca Ponce" profesion="Relaciones públicas" color="rojo" foto="./src/assets/milca.jpg"
        descripcion="Desarrolladora web full stack y relaciones públicas de la empresa de programación Loop Rebels."
        onClick={() => manejarClick("el perfil de Milca.")}
      />
      </div>
    </>
  );
}

export default App;