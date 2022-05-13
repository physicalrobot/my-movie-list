import MovieList from './MovieList'
import { useState, useEffect, useRef } from 'react'
import Favorite from './Favorite'
import ReviewList from './ReviewList'
import ReviewPage from './ReviewPage'
import film from './film.png'

import {
  BrowserRouter,Routes,
  Link,
  Outlet,
  Route,
  Router
} from "react-router-dom"

function Home({handleLogout, user,setUser, id, changeUserpic}) {
  const [movlist, setMovlist] = useState([])
  const [search, setSearch] = useState("");
  const [favoritelist, setFavoritelist] = useState([])
  const [reviews, setReviews] = useState([])
  const [userpic, setUserpic] = useState(null)



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


      fetch("/me")
      .then((r) => {
        if (r.ok) {
        r.json().then((user) => setUser(user))}})
        

  }, []);

  const displayedMovies = movlist.filter((movies) =>
    movies.title?.toLowerCase().includes(search.toLowerCase())
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
  

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => handleLogout());
  

}

const [avatar, setAvatar] = useState(null)



 const handleSubmit= (event) => {
    event.preventDefault()
    
    const formData = new FormData();
    formData.append('avatar', userpic);
    fetch(`/users/${id}`, {

          method: 'PATCH',
          body: formData,
        })
        .then((r) => r.json())
        .then(
          fetch("/me")
          
          .then((r) => {
            if (r.ok) {
            r.json().then((user) => setUser(user))
            
        
    }}))


 
  }
  const ref = useRef("");

  function handleClick() {
    ref.current.value = ""
  }



  // console.log(user[1]?.public_url)
    

  return (
    <div>









      {/* <div className='navi'>
        <Link to="/"> Home </Link>
      </div>
      <Outlet /> */}
      <div className='heading'>
      <div className="siteicon">
       <img src={film}></img> 
      </div>
        <h1 className='siteheading'>My Movie List</h1>
        <div 
        className='logoutbuttcontainer'>
          {/* <div className='avatardiv'> */}
          {user[1]?.public_url ? <img className='avatar' src={user[1]?.public_url} /> : null}
          {/* </div> */}
          <button className='logoutbutt' onClick={handleLogoutClick}>Logout</button></div>
      </div>
      
<div id='uploadform'>

<form onSubmit={handleSubmit}>
            <input className='profilepicinput' id='profilepicinput1' type="file" ref={ref} accept="image/png, image/jpeg" onChange={(e) => setUserpic(e.target.files[0])} />
              <input className='profilepicinputbutt' onClick={handleClick}  type='submit'/>
              {/* <label for="uploadavatar">Change Profile Pic</label> */}
      </form> 

  
      </div>






     <div className='favorites'>
        <h1 className='favmoviehead'>Your Favorite Movies!</h1>
        <Favorite handleDeleteFav={handleDeleteFav} favoritelist={favoritelist} setFavoritelist={setFavoritelist} />
      </div>



      <div className='reviews'>
        <h1 className='reviewhead'>Your Reviews</h1>
        <ReviewList movlist={movlist} reviews={reviews} setReviews={setReviews} handleDeleteRev={handleDeleteRev} />

      </div>


      <MovieList movielist={displayedMovies} search={search} setSearch={setSearch} favoritelist={favoritelist} setFavoritelist={setFavoritelist} handleAddFav={handleAddFav} handleLogout={handleLogout} />

 

    
 

    </div>
  )

}

export default Home;
