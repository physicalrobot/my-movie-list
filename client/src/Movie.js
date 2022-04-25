import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { CardContent, GridList } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";




 function Movie({movie, handleAddFav}){

    function favMovieSelect(){
    fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: movie.title,
            image_url: movie.image_url
            
        }),
    })
                .then((r) => r.json())
                .then((r) => handleAddFav(r))
    }




    return (
        <div className='movieelement'>
           {/* <h1 className='movietitle'>{movie.title}  
           <IconButton    onClick= {favMovieSelect} variant='outlined' size='small'>❤️</IconButton>
</h1> */}
 <h1 className='movietitle'>{movie.title}  
           <IconButton    onClick= {favMovieSelect} variant='outlined' size='small'>❤️</IconButton>
</h1>
  <Card className='moviecard' style={{ display: 'flex' }}>
 
              <CardMedia     component="img"
image={movie.image_url} title={movie.title} />
          {/* <Typography gutterBottom variant="headline" component="h2"> */}
       
          {/* </Typography> */}

   {/* <img className='movieposter'  src ={movie.image_url}
    // width="100%" height="100%" 
 ></img> */}
            </Card>
        </div>
    )
}

export default Movie;