import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Nav from './Nav'
import ReviewPage from './ReviewPage'
import {useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';


function App() {
  const [movlist, setMovlist] = useState([])
  const [reviews, setReviews] = useState([])

  const [user, setUser] = useState([])

  let navigate = useNavigate();


  useEffect(() => {
    
    fetch("/movies")
      .then((r) => r.json())
      .then((r) => setMovlist(r))


    fetch("/reviews")
      .then((r) => r.json())
      //  .then((r) => console.log(r) )
      .then((r) => setReviews(r))
      


      fetch("/me")
    .then((r) => {
      if (r.ok) {
      r.json().then((user) => setUser(user))
      
        // console.log(r.js)
        // setUser(r)
        // r.text().then(console.log)
      }else{
        navigate("/signup")
      }
    //   .then((r) => r.json())
    // })
    })

  }, []);


  function handleAddRev(newrev) {
    setReviews([...reviews, newrev]);
  }


  function handleDeleteRev(id) {
    const updatedRev = reviews.filter((review) => review.id !== id);
    setReviews(updatedRev);
  }

  let url = ""

  // fetch("/me")
  // .then((r) => {
  //   if (r.ok) {
  //   r.json().then((user) => setUser(user))
    
  //   url = user[1].public_url}})




  // useEffect(() => {
  //   // auto-login
  //   fetch("/me")
  //   .then((r) => {
  //     if (r.ok) {
  //     r.json().then((user) => setUser(user))
      
  //       // console.log(r.js)
  //       // setUser(r)
  //       // r.text().then(console.log)
  //     }else{
  //       navigate("/signup")
  //     }
  //   //   .then((r) => r.json())
  //   // })
  //   });
  // }, []);

  function handleLogout() {
    setUser(null);
    navigate ("/signup")
  }


  function changeUserpic(pic){
    setUser(pic)

  }

 

  return (
    <div className="App">
      {/* <Router> */}

       {  user ? (
       <Routes>
         <Route path='/' element={<Home 
         handleLogout={handleLogout} 
         setUser={setUser} 
         changeUserpic={changeUserpic} 
         user= {user} 
         id = {user.id}/>}/>
          <Route path='/movies'element={<Nav />}>
            <Route path=':id' element={<ReviewPage  handleAddRev={handleAddRev}  movlist={movlist} setMovlist={setMovlist} />}/>
          </Route>
        <Route  path="/signup" element={<SignUp user={user} setUser={setUser} handleLogout={handleLogout} />} />
        <Route  path="/login" element={<Login setUser={setUser} user={user} />} />

    
       </Routes> ) : (
      <Routes>

        <Route  path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route  path="/signup" element={<SignUp user={user} setUser={setUser} handleLogout={handleLogout} />} />
      </Routes>
    )}
       {/* </Router> */}
    </div>
  );
}

export default App;
