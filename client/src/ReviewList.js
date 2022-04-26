import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react'
import Review from './Review'

export default function ReviewList({ reviews, setReviews,handleDeleteRev, movlist }) {
  const [user,setUser] = useState([])
  


  useEffect(() => {

        fetch("/users")
          .then((r) => r.json())
          .then((r) => setUser(r))

      }, []);

  console.log(user)
  

  console.log(reviews)
  // reviews.map((review) => console.log(review.text))



  return (
    <div className='reviewlist'>
      {reviews.map((review) => (

        user.id == review.user_id ? (

        
        <Review movlist={movlist} handleDeleteRev={handleDeleteRev} review={review} />):(console.log('hello'))
        
      ))}
    </div>


  );
      
}