import MemoryCard from './components/MemoryCard';
import './styles/App.css';

function App() {
  return (
    <section className="Memory-Game">
      <header className="App-header">
      </header>
      <MemoryCard frontImg="mist"/>
      <MemoryCard frontImg="forest"/>
      <MemoryCard frontImg="palm"/>
      <MemoryCard frontImg="sunrise"/>
    </section>
  );
}

export default App;
