import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import FetchPokemonButton from './components/FetchPokemonButton'
import PokemonDisplay from "./components/PokemonDisplay"




function App() {
  const[pokemon,setPokemon] = useState([])
  
  return (
    <div className="container col-5 mx-auto center w-50">
      <FetchPokemonButton pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonDisplay pokemon={pokemon}/>
    </div>
  );
}

export default App;
