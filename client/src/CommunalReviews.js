import { RateReviewSharp } from "@material-ui/icons";
import { RateReview } from "@material-ui/icons";
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react'


export default function CommunalReviews ({username,user, review, public_url}) {


    console.log(review)


    return (
    
    // <div className='reviewset'>
        <div className='commreviews'>

       <div className = 'commreviewandusername'>
           <img className='reviewavatar' src={review.userpic}/>
          <h3 className='reviewss'>{review.username} :</h3>

           <p className='commreviewtext'>{review.text}</p>
        </div>
        <div className='readonlyratings'>
        <Rating name="read-only" value={review.value} readOnly />
        </div>
     
        </div>

//    </div>

    )
}