
import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import MovieList from "./Movielist";
import Ajout from "./Ajout";
import Filter from "./Filter";


const App = () => {
   const[movies , setmovies]=useState([
    {
      id : uuidv4(),
      title:"Inception",
     description:"Dom Cobb, un voleur expérimenté, se spécialise dans l'extraction d'informations précieuses depuis les rêves de ses cibles. Lorsqu'on lui offre une chance de racheter sa vie en accomplissant l'inverse - l'inception d'une idée dans l'esprit d'un individu - Cobb et son équipe se lancent dans une mission complexe et dangereuse. Le film explore les frontières entre la réalité et les rêves, offrant une expérience cinématographique captivante.",
     posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnA8FjFw6xFxokWgvRN8LpIXNAaIM6SoRbyj9rmLz58lvwLojA3zOxv2SOtD4C4PseaJ8&usqp=CAU" ,
     rate:2,
   },
   {
    id : uuidv4(),
    title:"dark",
   description:"Dom Cobb, un voleur expérimenté, se spécialise dans l'extraction d'informations précieuses depuis les rêves de ses cibles. Lorsqu'on lui offre une chance de racheter sa vie en accomplissant l'inverse - l'inception d'une idée dans l'esprit d'un individu - Cobb et son équipe se lancent dans une mission complexe et dangereuse. Le film explore les frontières entre la réalité et les rêves, offrant une expérience cinématographique captivante.",
   posterURL:"https://m.media-amazon.com/images/M/MV5BYjQ1ZWFlZDQtZDhjOS00NjdmLTg1MzEtYjM0MzM0MGIxYTU5XkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_.jpg" ,
   rate:5,
 }
   
   ])
  const [rates,setrates]=useState(0)
  const [title,settitle]=useState("")
  
  return (
    <div className="App-header">
     
      <Ajout  setmovies={setmovies} movies={movies}   />
      <Filter rates={rates} setrates={setrates}  settitle={settitle}  />
      <MovieList movies={movies.filter((movie,i)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && movie.rate>=rates)}   />
     
    </div>
  );
};

export default App;
