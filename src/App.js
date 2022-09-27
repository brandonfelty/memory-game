import MemoryCard from './components/MemoryCard';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <MemoryCard frontImg="mist"/>
      <MemoryCard frontImg="forest"/>
      <MemoryCard frontImg="palm"/>
      <MemoryCard frontImg="sunrise"/>
    </div>
  );
}

export default App;
