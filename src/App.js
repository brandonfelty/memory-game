import { useState } from 'react';
import MemoryCard from './components/MemoryCard';
import './styles/App.css';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <section className="Memory-Game">
      <header className="App-header">
      </header>
      <MemoryCard frontImg="mist" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="mist" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="forest" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="forest" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="palm" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="palm" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="sunrise" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="sunrise" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="flower" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="flower" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="elk" cards={cards} setCards={setCards}/>
      <MemoryCard frontImg="elk" cards={cards} setCards={setCards}/>
    </section>
  );
}

export default App;
