import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const FilmCard= ({movies}) => {
  return (
    
    <div   className='ino' >
      <Link className='lin' to={`/movies/${movies.title}`}>
        <Card style={{ width: 300 ,  marginTop:20 , marginRight:10 }}>

      <Card.Img variant="top"    src={movies.posterURL} alt={movies.title} style={{width:300 ,height:300}} />
      <Card.Body style={{ backgroundColor:'rgb(106, 106, 104,0.5)' , height:200 }}>
        <Card.Title>{movies.title}</Card.Title>
        <Card.Text style={{ fontSize:10 }} >

       <p>description: {movies.description}</p>

       <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movies.rate}
         
        />
        
        
        </Card.Text>
        
       
      
      </Card.Body>
    </Card>

    </Link>








    </div>
  )
}




export default FilmCard