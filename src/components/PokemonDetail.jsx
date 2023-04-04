import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"

const PokemonDetail = () => {
    const params = useParams();

    const [pokemonDesc,setPokemonDesc] = useState("");
    const [generation,setGeneration] = useState("");
    const [capture,setCapture] = useState(0);
    const [shape,setShape] = useState("");

    (params);

    const navigate = useNavigate();

    const goBack = ()=>{
        navigate('/')
    }

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
          );

          const data = await response.json();

          (data);
    
          const englishDes = data.flavor_text_entries.filter(
            (entry) => entry.language.name === "en"
          )[0].flavor_text;

          const gen = data.generation.name;
          const cap = data.capture_rate;
          const sh = data.shape.name;

          setGeneration(gen);
          setPokemonDesc(englishDes);
          setCapture(cap);
          setShape(sh)
        }
    
        fetchData();
      }, [params.id]);
  return (
    <>
    <div className="bg-emerald-500 p-8 my-4 text-white rounded-xl w-[30vw] font-bold font-poppins shadow-xl space-x-5">
        <h3>Info:</h3>
        <p>{pokemonDesc}</p>

        <h3 >Generation: <span>{generation}</span> </h3>
        <h3 >Capture Rate: <span>{capture}</span> </h3>
        <h3 >Shape: <span>{shape}</span> </h3> 
    </div>
        <button className="bg-amber-200 py-2 px-4 rounded-lg text-green-700 font-bold" onClick={goBack}>Go Back</button>
    </>
  )
}

export default PokemonDetail
