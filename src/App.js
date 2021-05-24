import logo from './bal.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo2" alt="logo" />
        <p>
          <a href="choicesapp://redirectToLogin">Login to choices</a> H3H3
        </p>
      </header>
    </div>
  );
}

export default App;
