import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'


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
           <h1 className='movietitle'>{movie.title}  
           <IconButton    onClick= {favMovieSelect} variant='outlined' size='small'>❤️</IconButton>
</h1>
        <div>
   <img className='movieposter'  src ={movie.image_url}
    width="100%" height="100%" 
 ></img>
        </div>
        </div>
    )
}

export default Movie;