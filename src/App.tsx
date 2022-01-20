import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonResponseModel } from './models/PokemonResponseModel';
import axios from 'axios';

const App: React.FC = () => {

  const [pokemon, setPokemon] = useState<PokemonResponseModel | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
  


  useEffect(() => {

    (async () => {
      try {
        setPokemon((await axios.get<PokemonResponseModel>(url)).data);
      } catch(err) {
        console.error('erroraccio', err);
        setError(true);
      }
      
    })();    
  }, [url]);

  return (
    <>
      {error && <div>Errore!!!</div>}
      <button disabled={!pokemon?.previous} onClick={() => setUrl(pokemon?.previous ?? '')}>indietro</button>
      <button disabled={!pokemon?.next} onClick={() => setUrl(pokemon?.next ?? '')}>avanti</button>
      <ul>
        {pokemon?.results?.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    </>
    
  )
}

export default App;
