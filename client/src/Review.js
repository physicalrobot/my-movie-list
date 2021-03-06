import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';



export default function Review ({review, handleDeleteRev}) {
    const [movies, setMovies] = useState([])
    const {id} = review

    useEffect(() => {

        fetch("/movies")
          .then((r) => r.json())
          .then((r) => setMovies(r))

        }, []);


    function handleDelete() {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        
        .then((r) => r.json())
        // .then((wrk) => {
        //     setFavoritelist(wrk)
        // });
        handleDeleteRev(id)
    }
    
    // movlist[review.move_id]?.title
    // console.log(movies[review.movie_id - 1].title)

    return (
    
    <div className='reviewset'>

        <h1 className='reviewmovie'>{movies[review.movie_id - 1]?.title}</h1>
        <h3 className='reviewbod'>{review.text}
      
        </h3>
        <div className='readonlyrevrate' >
        <Rating name="read-only" value={review.value} readOnly />

        <IconButton className='trashcan' onClick={handleDelete} variant='outlined' size='small'>🗑️</IconButton>
        </div>
   </div>

    )
}