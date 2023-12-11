import React, { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from 'uuid';
const Ajout = ({setmovies , movies}) => {
  const title= useRef()
  const description= useRef()
  const posterURL= useRef()
const [rate , setrate]=useState()

const addmovies=()=>{
  setmovies([...movies, 
    {
      id:uuidv4(),
      title:title.current.value,
      description:description.current.value,
      posterURL:posterURL.current.value,
      rate:rate

    }])
}

  return (
    <div className='add'>
         <div >
          
       <label style={{ marginTop:50 }}>title : </label>
      <input className='form-control' type="text" ref={title}  />
      <label> discription :</label>
      <input className='form-control' type="text" ref={description} />
      </div>
      <div  >
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rate}
          onStarClick={(value)=>setrate(value)}
          emptyStarColor={"white"}
        />
      <label> PosteUrl:</label>
      <input className='form-control' type="text" ref={posterURL} />
       <button onClick={addmovies}  style={{ width:80 , backgroundColor:'darkred' , marginTop:10 }} type='submit' className='btn form-control '>add</button>
      </div>
    </div>
  )
}

export default Ajout