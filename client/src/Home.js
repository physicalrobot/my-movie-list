import MovieList from './MovieList'
import { useState, useEffect } from 'react'
import Favorite from './Favorite'
import ReviewList from './ReviewList'
import ReviewPage from './ReviewPage'

import {
  BrowserRouter,Routes,
  Link,
  Outlet,
  Route,
  Router
} from "react-router-dom"

function Home({handleLogout}) {
  const [movlist, setMovlist] = useState([])
  const [search, setSearch] = useState("");
  const [favoritelist, setFavoritelist] = useState([])
  const [reviews, setReviews] = useState([])



  useEffect(() => {

    fetch("/movies")
      .then((r) => r.json())
      .then((r) => setMovlist(r))


    fetch("/favorites")
      .then((r) => r.json())
      //  .then((r) => console.log(r) )
      .then((r) => setFavoritelist(r))


    fetch("/reviews")
      .then((r) => r.json())
      .then((r) => setReviews(r))

  }, []);

  const displayedMovies = movlist.filter((movies) =>
    movies.title.toLowerCase().includes(search.toLowerCase())
  )

  function handleAddFav(newfav) {
    setFavoritelist([...favoritelist, newfav]);
  }

  function handleDeleteFav(id) {
    const updatedFav = favoritelist.filter((movie) => movie.id !== id);
    setFavoritelist(updatedFav);
  }

  function handleAddRev(newrev) {
    setReviews([...reviews, newrev]);
  }


  function handleDeleteRev(id) {
    const updatedRev = reviews.filter((review) => review.id !== id);
    setReviews(updatedRev);
  }
  
  console.log(favoritelist)
  console.log(movlist)
  return (
    <div>
      {/* <div className='navi'>
        <Link to="/"> Home </Link>
      </div>
      <Outlet /> */}

      <MovieList movielist={displayedMovies} search={search} setSearch={setSearch} favoritelist={favoritelist} setFavoritelist={setFavoritelist} handleAddFav={handleAddFav} handleLogout={handleLogout} />

      <div className='favorites'>
        <h1>Your Favorite Movies!</h1>
        <Favorite handleDeleteFav={handleDeleteFav} favoritelist={favoritelist} setFavoritelist={setFavoritelist} />
      </div>

      <div className='reviews'>
        <h1>Your Reviews</h1>
        <ReviewList movlist={movlist} reviews={reviews} setReviews={setReviews} handleDeleteRev={handleDeleteRev} />

      </div>
       {/* <Routes>
    
         <Route path="/movies/:id" element={<ReviewPage movlist={movlist} />} />
      </Routes> */}

    </div>
  )

}

export default Home;
