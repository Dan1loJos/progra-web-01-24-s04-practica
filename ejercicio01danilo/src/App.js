import logo from './logo.svg';
import './App.css';



function guardar(){
alert("Listo");
}


function App() {
  return (
    <div className="App">
      <h1>
        Hola mundo
      </h1>



      <h2>
        Dijte su nombre
      </h2>

      <input type="test"></input>
      <br></br>

      <h2>
        Dijte su SEXO
      </h2>
    <select>
      <option>Masculino</option>
      <option>Femenino</option>
      <br></br>
      </select>

    <br>
    </br>
    <buttun onClick={guardar}>guardar</buttun>
    </div>
  );
}

export default App;
