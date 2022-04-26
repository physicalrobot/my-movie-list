import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Nav from './Nav'
import ReviewPage from './ReviewPage'
import {useEffect, useState} from 'react'


function App() {
  const [movlist, setMovlist] = useState([])
  const [reviews, setReviews] = useState([])


  useEffect(() => {
    
    fetch("/movies")
      .then((r) => r.json())
      .then((r) => setMovlist(r))


    fetch("/reviews")
      .then((r) => r.json())
      //  .then((r) => console.log(r) )
      .then((r) => setReviews(r))


  }, []);


  function handleAddRev(newrev) {
    setReviews([...reviews, newrev]);
  }


  function handleDeleteRev(id) {
    const updatedRev = reviews.filter((review) => review.id !== id);
    setReviews(updatedRev);
  }
  
  console.log(movlist)
 

  return (
    <div className="App">
      <Router>
      <nav>
      {/* <Link to="/"> Home </Link> */}


       </nav>
       <Routes>
         <Route path='/' element={<Home />}/>
          <Route path='/movies'element={<Nav />}>
            <Route path=':id' element={<ReviewPage  handleAddRev={handleAddRev}  movlist={movlist} setMovlist={setMovlist} />}/>
          </Route>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
