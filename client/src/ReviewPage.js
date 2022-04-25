import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import CommunalReviews from "./CommunalReviews";
export default function ReviewPage({movlist}){

    // const [movlist, setMovlist] = useState([])

    const { id } = useParams();

   
      console.log(movlist)
      const p = movlist[id - 1]?.reviews
    //   const r = p.map((review) =>  review.text)
      console.log( p.map((review) =>  review.text))

    return (
        <div>
           <h1 className='reviewtitle'>
               {movlist[id - 1]?.title}
            </h1>
            <img className='reviewimage' src={movlist[id - 1]?.image_url} />
            <div className='reviewcontainer'>
            {p.map((movie) => {
                {console.log(movie.text)}
               return <CommunalReviews review={movie} />

                })
            }


            </div>
            </div>
    )
    
    
        // movlist.map((movie) => {
        // <h1>{movie}</h1> }))
}