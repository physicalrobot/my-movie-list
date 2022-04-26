import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import FavMovie from './FavMovie';

export default function Favortie({favoritelist, setFavoritelist, handleDeleteFav}){

    const [user,setUser] = useState([])
  


    useEffect(() => {
  
          fetch("/users")
            .then((r) => r.json())
            .then((r) => setUser(r))
  
        }, []);
  



    return (

<div>        
    <ul className = 'favmovielist'  key={uuidv4()} >

        {favoritelist.map((movie) => (
console.log(movie),
user.id == movie.user_id ? (

        
    <FavMovie handleDeleteFav={handleDeleteFav} movie = {movie} setFavoritelist={setFavoritelist}/>):(console.log('hello'))
            ))}


        

            </ul>
            </div>

    )



}