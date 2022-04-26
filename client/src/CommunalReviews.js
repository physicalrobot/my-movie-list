import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react'


export default function CommunalReviews ({username,user, review}) {





    return (
    
    // <div className='reviewset'>
        <div className='commreviews'>
        <Rating name="read-only" value={review.value} readOnly />

        <p>{review.text}</p>
        {console.log(review.user_id)}
        {/* <h1 className='reviewss'>{review.username}</h1> */}

        </div>

//    </div>

    )
}