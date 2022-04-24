import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import FavMovie from './FavMovie';

export default function Favortie({favoritelist, setFavoritelist, handleDeleteFav}){





    return (

<div>        
    <ul className = 'favmovielist'  key={uuidv4()} >

        {favoritelist.map((movie) => (
            <FavMovie handleDeleteFav={handleDeleteFav} movie = {movie} setFavoritelist={setFavoritelist} />
            ))}

            </ul>
            </div>

    )



}