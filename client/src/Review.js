import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react'


export default function Review ({review}) {


    return (
    
    <div className='reviewset'>
        <h1>{review.text}</h1>
        <Rating name="read-only" value={review.value} readOnly />

   </div>

    )
}