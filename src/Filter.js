import React, { useRef } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({rates,setrates,settitle}) => {
const x=useRef()

  return (
    <div className='fil'>
        <input type='text' placeholder='movies title' className='form-control mt-3' ref={x} onChange={()=>{settitle(x.current.value)}} ></input>
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rates}
          onStarClick={(value)=>setrates(value)}
          emptyStarColor={"white"}
        />
    </div>
  )
}

export default Filter