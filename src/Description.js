

import { useNavigate, useParams } from 'react-router-dom'

const Description = ({movies}) => {
    const param=useParams()

  var tab= movies.filter((movie,i)=>movie.title===param.name)
   

    
    const navigate=useNavigate()
  return (
    <div>
        <h1>{param.name}</h1>
       <div>
        <iframe
          width="560"
          height="315"
          src={tab[0].trailer}
          title={`${tab[0].title} Trailer`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
     <button className='form-control' style={{ width:100 , backgroundColor:'darkred' , marginTop:10 }} onClick={()=>{navigate('/')}}>go back</button>
     

    </div>
  )
}

export default Description