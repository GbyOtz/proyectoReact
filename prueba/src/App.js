import logo from './logo.svg';
import './componentes/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header();
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mi <code>lo</code>go
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mi primera app react
        </a>
      </header>
    </div>
  );
}

export default App;
