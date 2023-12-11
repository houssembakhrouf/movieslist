import React from 'react'
import FilmCard from './FilmCard'

import './App.css';
const MovieList = ({movies}) => {
  return (
    <div className="list" style={{ display:'flex' , alignItems:'center' }}  >{movies.map (el => <FilmCard     movies={el}/>)}

    </div>
  )
}

export default MovieList