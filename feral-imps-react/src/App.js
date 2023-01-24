import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card showButton={true} />
      <Card showButton={false} />
    </div>
  );
}

export default App;
