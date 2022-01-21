import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonResponseModel } from './models/PokemonResponseModel';
import axios from 'axios';
import { GetPokemon } from './api';
import { useQuery } from 'react-query';

const App: React.FC = () => {

  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
  // const hash = `${url}?`.replace(/^.*\?/, '');

  const {isLoading, error, data: pokemon } = useQuery('pokemon', () =>  GetPokemon(url))

  if(isLoading) {
    return (
      <h1>LOADING...</h1>
    )
  }

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
