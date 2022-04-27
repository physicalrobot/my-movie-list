import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


export default function FavMovie({movie, handleDeleteFav, setFavoritelist}){

    const {id, image_url} = movie

    function handleDelete() {
        fetch(`/favorites/${id}`, {
            method: "DELETE",
        })
        
        .then((r) => r.json())
        // .then((wrk) => {
        //     setFavoritelist(wrk)
        // });
        handleDeleteFav(id)
    }

    return(
        <div className='favmovietitle'>
        {/* <h1  onClick={handleDelete}>{movie.title}</h1> */}
        <Card className='favmoviecard' style={{ display: 'flex' }}>
 
 <CardMedia   className='favcardmedia'  
 component="img"
 image={movie.image_url} title={movie.title} onClick={handleDelete} />

</Card>
        </div>
    )
}