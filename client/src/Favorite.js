import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import FavMovie from './FavMovie';
import { Stack, ImageList, ImageListItem } from '@mui/material'

export default function Favortie({favoritelist, setFavoritelist, handleDeleteFav}){

    const [user,setUser] = useState([])
  


    useEffect(() => {
  
          fetch("/users")
            .then((r) => r.json())
            .then((r) => setUser(r))
  
        }, []);




    return (

  <div className = 'favmovielist' key = {uuidv4()}>        
    {/* <ul className = 'favmovielist'  key={uuidv4()} > */}


 <ImageList 
      cols={1} className="favimageList squares" >
    

    {favoritelist.map((movie) => (

      <ImageListItem className='favimglistitem' key={movie.id} style={{ display: 'flex' }} >

      <div className = 'innercontain'>

      {user.id == movie.user_id ? (
    <FavMovie handleDeleteFav={handleDeleteFav} movie = {movie} setFavoritelist={setFavoritelist}/>):(console.log('hello'))}
          
</div>

</ImageListItem>
    ))}

</ImageList>


</div>

    )
      }





{/* 
   {favoritelist.map((movie) => (

       user.id == movie.user_id ? (
    <FavMovie handleDeleteFav={handleDeleteFav} movie = {movie} setFavoritelist={setFavoritelist}/>):(console.log('hello'))))} */}


        


            {/* </ul> */}
    



