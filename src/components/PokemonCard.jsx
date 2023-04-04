import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function getPokemonData() {

      //fetching the main API which returns only name and url
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await res.json();
      const pokemonList = data.results;

      setPokemon(pokemonList);


      // Get additional data for each Pokemon like image,height,name etc.
      const pokemonDataList = await Promise.all(pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }));

      (pokemonDataList);
      setPokemonData(pokemonDataList);
    }
    getPokemonData();
  }, []);


  return (
    <div className='container mt-4 mb-4 grid grid-cols-3 gap-20  '>
     {
      pokemonData.map((curPokemon,index)=>{

        const move = pokemonData[index].moves[0].move.name;
        const image = pokemonData[index].sprites.front_shiny;

        return <Pokemon key={pokemonData[index].id}
                        id={pokemonData[index].id} 
                        wholedata={curPokemon}
                        name={curPokemon.name}
                        exp={pokemonData[index].base_experience}
                        height={pokemonData[index].height}
                        weight={pokemonData[index].weight}
                        move={move}
                        type={pokemonData[index].types[0].type.name}
                        />
      })
     }
    </div>
  )
}

export default PokemonCard