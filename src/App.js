import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';

function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto = 'Clic'
          esBotonDeClic = { true }
          manejarClic = {manejarClic}
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClic = { false }
          manejarClic = {manejarClic}
        />
      </div>
    </div>
  );
}

export default App;
