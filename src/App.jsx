import { useState,useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

//components import
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import Header from "./components/Header";

function App() {

  return (
    <div className=" flex justify-center h-full items-center flex-col bg-[#38b2c5] bg-blend-saturation">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<PokemonCard/>}/>
        <Route path="/:id" element={<PokemonDetail/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
    
  )
}

export default App
