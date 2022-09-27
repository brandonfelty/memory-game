import MemoryCard from './components/MemoryCard';
import './styles/App.css';

function App() {
  return (
    <section className="Memory-Game">
      <header className="App-header">
      </header>
      <MemoryCard frontImg="mist"/>
      <MemoryCard frontImg="mist"/>
      <MemoryCard frontImg="forest"/>
      <MemoryCard frontImg="forest"/>
      <MemoryCard frontImg="palm"/>
      <MemoryCard frontImg="palm"/>
      <MemoryCard frontImg="sunrise"/>
      <MemoryCard frontImg="sunrise"/>
      <MemoryCard frontImg="flower"/>
      <MemoryCard frontImg="flower"/>
      <MemoryCard frontImg="elk"/>
      <MemoryCard frontImg="elk"/>
    </section>
  );
}

export default App;
