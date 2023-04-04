import { useEffect, useState } from 'react';

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function getPokemonData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await res.json();
      const pokemonList = data.results;

      // Get additional data for each Pokemon
      const pokemonDataList = await Promise.all(pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }));

      console.log(pokemonDataList);
      setPokemonData(pokemonDataList);
    }
    getPokemonData();
  }, []);

  return (
    <div>
      {/* your component code here */}
    </div>
  )
}

export default PokemonCard
