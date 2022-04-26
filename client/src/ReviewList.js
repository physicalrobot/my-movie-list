import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react'
import Review from './Review'

export default function ReviewList({ reviews, setReviews,handleDeleteRev }) {
  



  console.log(reviews)
  reviews.map((review) => console.log(review.text))

  return (
    <div className='reviewlist'>
      {reviews.map((review) => (
        <Review handleDeleteRev={handleDeleteRev} review={review} />

      ))}
    </div>


  )
}