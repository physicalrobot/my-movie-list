import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import CommunalReviews from "./CommunalReviews";



export default function ReviewPage({movlist, handleAddRev, setMovlist}){
    const [text,setText] = useState("")
    const [value, setValue] = useState(null)
    // const [movlist, setMovlist] = useState([])


    const { id } = useParams();

//    const p = null
      console.log(movlist)
      let p = movlist[id - 1]?.reviews
    //   const r = p.map((review) =>  review.text)
    //   console.log( p.map((review) =>  review.text))



      useEffect(() => {

        fetch("/movies")
          .then((r) => r.json())
          .then((r) => setMovlist(r))

        }, []);

        function makeNewReview(e) {
            e.preventDefault();
    
           fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: text,
                // user_id: user_id,
                value: value,
                movie_id: id 
                
            })
        })
                    .then((r) => r.json())
                    .then(setValue(3))
                    .then((r) => handleAddRev(r))
                    .then(
                        fetch("/movies")
                                 .then((r) => r.json())
                                 .then((mov) => {setMovlist(mov)})
                                 .then( p = movlist[id - 1]?.reviews )
                                 .then( setText("")))
                  
        
    }

    return (
        <div>
           <h1 className='reviewtitle'>
               {movlist[id - 1]?.title}
            </h1>
            <img className='reviewimage' src={movlist[id - 1]?.image_url} />
            <div className='reviewcontainer'>
            {p?.map((movie) => {
                {console.log(movie.text)}
               return <CommunalReviews review={movie} />
                })
            }
            </div>
            <div className='newreviewcontainer'>
                <form onSubmit={makeNewReview}>
                <textarea
                        className='reviewtext'
                        placeholder='Your review....'
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    ></textarea>
                <button type='submit' ></button>
                </form> 
            </div>
        </div>
    )
    
    
        // movlist.map((movie) => {
        // <h1>{movie}</h1> }))
}