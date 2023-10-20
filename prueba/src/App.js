
import './componentes/Header/Header.js';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import ghost from './componentes/Ghost/index.js';

function App() {
  return ( 
    <div>
      <Header/>
      <Formulario/>
      <ghost></ghost>
    </div>
    
  );
}

export default App;
