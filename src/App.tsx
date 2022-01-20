import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [pokemon, setPokemon] = useState<Array<any>>([]);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  


  useEffect(() => {

    (async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`);
        if(res.status > 399) {
          throw new Error(res.statusText);
        }
  
        const data = await res.json();
        setPokemon(data.results);
      } catch(err) {
        console.error('erroraccio', err);
        setError(true);
      }
      
    })();    
  }, [page]);

  return (
    <>
      {error && <div>Errore!!!</div>}
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>indietro</button>
      <button onClick={() => setPage(page + 1)}>avanti</button>
      <ul>
        {pokemon.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    </>
    
  )
}

export default App;
