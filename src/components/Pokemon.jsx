import { Link } from "react-router-dom";

const Pokemon = ({ wholedata,name,exp,height,weight,move,type,id}) => {
  return (
    <div className='container border-solid w-[90%] h-[12rem] flex  items-center flex-col shadow-xl hover:shadow-emerald-300 hover:backdrop-blur-sm rounded-xl hover:scale-105 bg-gradient-to-b from-[#80ccff] to-[#4d4dff] '>
        {/* <figure>
            <img src={image} alt={name} />
        </figure> */}
     <Link to={`/${id}`}>
        <div className='some-details text-[#ffffff] font-poppins text-lg font-semibold'>
            <h3 className="text-2xl">POKEMON: {name}</h3>
            <h3 className="text-center">XP: {exp}</h3>
            <h3 className="text-center">HEIGHT: {height} FT</h3>
            <h3 className="text-center">WEIGHT: {weight} KG</h3>
            <h3 className="text-center">MOVE: {move}</h3>
            <h3 className="text-center">TYPE: {type} pokemon</h3>

        </div>
      </Link>
    </div>
  )
}

export default Pokemon
