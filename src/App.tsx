import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [pokemon, setPokemon] = useState<Array<any>>([]);
  const [error, setError] = useState<boolean>(false);
  


  useEffect(() => {

    (async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
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

    
      // .then(res => res.status < 399 ? res.json() : Promise.reject(res.statusText))
      // // .then(res => {
      // //   if(res.status < 399) {
      // //     return res.json();
      // //   } else {
      // //     return Promise.reject(res.statusText);
      // //   }
      // // })
      // .then(data => {
      //   setPokemon(data.results);
      // })
      // .catch(err => {
      //   console.error('erroraccio', err);
      //   setError(true);
      // })

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
