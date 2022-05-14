import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { CardContent, GridList } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { useNavigate,Link,Outlet } from "react-router-dom";
import {useState, useEffect} from 'react'

import Typography from "@material-ui/core/Typography";
// import {Link} from 'react-router-dom'





 function Movie({movie, handleAddFav, user}){
    const navigate = useNavigate();




    
        // console.log(user.id)


    const {title} = movie; 
    function favMovieSelect(){
    fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: movie.title,
            image_url: movie.image_url,
            user_id: user.id
            
        }),
    })
                .then((r) => r.json())
                .then((r) => handleAddFav(r))
    }





    return (
        <div className='movieelement'>
 
 <h2 className='movietitle'>{movie.title}  
 <div className='likenreviewicons'>
           <IconButton    onClick= {favMovieSelect} variant='outlined' size='small'>❤️</IconButton>

          <IconButton 
             onClick={() => {
                navigate(`/movies/${movie.id}`);
              }} 
              variant='outlined' size='small'>📜</IconButton>

          
           </div>
   </h2>
           <Card className='moviecard' style={{ display: 'flex' }}>
 
              <CardMedia     
              component="img"
              image={movie.image_url} title={movie.title} />
         
            </Card>
        </div>
    )
}

export default Movie;