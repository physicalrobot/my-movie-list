export default function FavMovie({movie, handleDeleteFav, setFavoritelist}){

    const {id} = movie

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

        <h1 onClick={handleDelete}>{movie.title}</h1>

    )
}