import { useState, useEffect } from 'react'
import Movie from './Movie'
import { v4 as uuidv4 } from 'uuid';
// import { ImageList, ImageListTile } from "@material-ui/core";
import { Stack, ImageList, ImageListItem } from '@mui/material'
import Button from '@material-ui/core/Button'
import { CardContent, GridList,Card } from "@material-ui/core";
// import Card from '@mui/material/Card';






function MovieList({ setSearch, search, movielist, handleAddFav, handleLogout }) {

  // load up the list of movies in the database and display them for the user to select. 
  function MovieSearch(e) {
    setSearch(e.target.value)
  }


  const [movlist, setMovlist] = useState([])

  const [user,setUser] = useState([])

  useEffect(() => {

    fetch("/movies")
      .then((r) => r.json())
      //  .then((r) => console.log(r) )
      .then((r) => setMovlist(r))




      
  



  
          fetch("/users")
            .then((r) => r.json())
            .then((r) => setUser(r))
  
        


    //  .then((mov) => 
    //     setMovlist(mov))
  }, []);
  console.log(movlist)


  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => handleLogout());
  

}



  return (
    <div className='movieconsole'>

      <input
        className='Search'
        name="Search"
        type="text"
        placeholder="Search Movies.."
        value={search}
        onChange={MovieSearch}
      ></input>
      <div className='logoutbuttcontainer'><button className='logoutbutt' onClick={handleLogoutClick}>Logout</button></div>

      {/* <div className='moviel'> */}
      {/* <GridList className='moviel'  cellHeight={450} cols={5} spacing={3} > */}
      <ImageList className='moviel'
      sx={{ width:4000, height: 850 }} 
      cols={4}  rowHeight={450} spacing={1} >
        
      {movielist.map((movie) => (
          <ImageListItem key={movie.id} style={{ display: 'flex' }}    >
  

            <Movie movie={movie} handleAddFav={handleAddFav} user={user} />
       

          </ImageListItem>
        ))}
      </ImageList>
    </div>




  )
}
export default MovieList