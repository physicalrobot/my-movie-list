import { useState, useEffect } from 'react'
import Movie from './Movie'
import { v4 as uuidv4 } from 'uuid';
// import { ImageList, ImageListTile } from "@material-ui/core";
import { Stack, ImageList, ImageListItem } from '@mui/material'
import Button from '@material-ui/core/Button'
import { CardContent, GridList,Card } from "@material-ui/core";
// import Card from '@mui/material/Card';






function MovieList({ setSearch, search, movielist, handleAddFav, handleLogout }) {
  const [moviepic, setMoviepic] = useState(null)
  const [title, setTitle] = useState('')

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


  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const formData = new FormData();
  //   formData.append('image', file);
  //   formData.append('fileName', file.name);
  //   fetch('/movies', {
  //         method: 'POST',
  //         body: formData
  //       })
  //     }

  




  return (
 
      <div className='movieconsole'>
           <div className='movieconsoleheading'>
           </div>

      <input
        className='Search'
        name="Search"
        type="text"
        placeholder="🔍 Find A Movie..."
        value={search}
        onChange={MovieSearch}
      ></input>

      {/* <div className='moviel'> */}
      {/* <GridList className='moviel'  cellHeight={450} cols={5} spacing={3} > */}
      <ImageList className='moviel'
      sx={{ width:4000, height: 850 }} 
      cols={4}  rowHeight={450} spacing={1} >
        
      {movielist.map((movie) => (
          <ImageListItem key={movie.id} style={{ display: 'flex' }}    >
  

            <Movie movie={movie} handleAddFav={handleAddFav} user={user} />

            {/* <form onSubmit={handleBeatSubmit}>
                    <input type="file" name="newPhoto"accept="image/png, image/jpeg" onChange={(e) => setMoviepic(e.target.files[0])}/>
                    <input type='submit'/>
            </form> */}


          </ImageListItem>
        ))}
      </ImageList>


      {/* <form onSubmit={handleBeatSubmit}>
          <h1>React File Upload</h1>
          <input type="file" name='image' onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form> */}

    </div>



  )
}
export default MovieList