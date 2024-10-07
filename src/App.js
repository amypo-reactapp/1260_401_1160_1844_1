import logo from './logo.svg';
import './App.css';
import Maincomponent from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Maincomponent />
        </div>
      </header>
    </div>
  );
}

export default App;
