import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';



export default function Review ({review, handleDeleteRev}) {
    const {id} = review
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
    


    return (
    
    <div className='reviewset'>
        <h1>{review.text}
        <IconButton  onClick={handleDelete} variant='outlined' size='small'>🗑️</IconButton>

        </h1>
        <Rating name="read-only" value={review.value} readOnly />
    
   </div>

    )
}