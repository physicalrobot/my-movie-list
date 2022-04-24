import {useState, useEffect} from 'react'
import Movie from './Movie'
import { v4 as uuidv4 } from 'uuid';
// import { ImageList, ImageListTile } from "@material-ui/core";
import {Stack, ImageList, ImageListItem} from '@mui/material' 
import Button from '@material-ui/core/Button'
import { GridList, GridListTile } from "@material-ui/core";





function MovieList({setSearch, search, movielist,handleAddFav}){

    // load up the list of movies in the database and display them for the user to select. 
    function MovieSearch(e) {
        setSearch(e.target.value)
    }


    const [movlist, setMovlist] = useState([])
 

    useEffect(() => {

        fetch("/movies")
         .then((r) => r.json())
        //  .then((r) => console.log(r) )
         .then((r) => setMovlist(r))


        //  .then((mov) => 
        //     setMovlist(mov))
      },[]);
      console.log(movlist)



    return(
      <div className='movieconsole'>
               <input
                className='Search'
                name="Search"
                type="text"
                placeholder="Search Movies.."
                value={search} 
                onChange={MovieSearch}
            ></input>
       

      <GridList className = 'moviel' cellHeight={600} cols={4} >
        {movielist.map((movie) => (
          <GridListTile  key={movie.id}>
            {/* <img src={movie.image_url} alt={movie.title} /> */}
            <Movie movie = {movie} handleAddFav={handleAddFav} />

          </GridListTile>
        ))}
      </GridList>
    </div>
       
       
       
//         <ul className = 'moviel'  key={uuidv4()} >
//         <Button>
//             Hello World
//         </Button>

// {movielist.map((movie) => (
//     // <h1 className='movietitle'>{movie.title}</h1>

//     // <img className='movieposter' src={movie.image_url}/>  


//     <Movie movie = {movie} handleAddFav={handleAddFav} />
// ))}


// </ul> 

// </div>
    )
}
export default MovieList