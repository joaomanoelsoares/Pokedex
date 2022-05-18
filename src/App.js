import './App.css';
import Header from './components/Header';
import Pokecard from './components/Pokecard';
import data from './data';

function App() {
  return (
    <div className="container">
      <Header headerTitle="Pokedex!" />
      <section className="poke-container">
        
        {data.map((value) => {
          return <Pokecard pokemons={value} key={value.id} />;
        })}

      </section>
    </div>
  );
}

export default App;
