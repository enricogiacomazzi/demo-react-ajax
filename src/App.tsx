import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [pokemon, setPokemon] = useState<Array<any>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemongg')
      .then(res => res.status < 399 ? res.json() : Promise.reject(res.statusText))
      // .then(res => {
      //   if(res.status < 399) {
      //     return res.json();
      //   } else {
      //     return Promise.reject(res.statusText);
      //   }
      // })
      .then(data => {
        setPokemon(data.results);
      })
      .catch(err => {
        console.error('erroraccio', err);
        setError(true);
      })

    // try{
      
    // } catch (e) {
    //   console.log('err 2', e)
    // }
    
  }, []);

  return (
    <>
      {error && <div>Errore!!!</div>}
      <ul>
        {pokemon.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    </>
    
  )
}

export default App;
