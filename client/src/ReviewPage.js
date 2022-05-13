import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import CommunalReviews from "./CommunalReviews";
import Button from '@material-ui/core/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';






export default function ReviewPage({movlist, handleAddRev, setMovlist}){
    const [text,setText] = useState("")
    const [value, setValue] = useState(null)
    // const [movlist, setMovlist] = useState([])
    const [user,setUser] = useState(null)




    const theme = createTheme({
        palette: {
          blue: {
            main: '#00d5ff',
            contrastText: '#00d5ff',
          },
        },
      });


    const { id } = useParams();

//    const p = null
      console.log(movlist)
      let p = movlist[id - 1]?.reviews
    //   const r = p.map((review) =>  review.text)
    //   console.log( p.map((review) =>  review.text))

    const[username, setUsername] = useState([])







      useEffect(() => {

        fetch("/movies")
          .then((r) => r.json())
          .then((r) => setMovlist(r))

          fetch("/users")
          .then((r) => r.json())
          .then((r) => setUser(r))

          
          fetch("/me")
          .then((r) => r.json())
          .then((r) => setUsername(r))

        }, []);

        // const publicavatar = username[1].public_url
        function makeNewReview(e) {
            e.preventDefault();


    
           fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: text,
                value: value,
                movie_id: id, 
                user_id: user.id,
                username: username[0].username,
                userpic: username[1].public_url
                
            })
        })
                    .then((r) => r.json())
                    // .then(setValue(3))
                    .then((r) => handleAddRev(r))
                    .then(
                        fetch("/movies")
                                 .then((r) => r.json())
                                 .then((mov) => {setMovlist(mov)})
                                 .then( p = movlist[id - 1]?.reviews )
                                 .then( setText("")))
                                 .then(setValue(0))
                                 
                
        
    }

    



        console.log(username[1]?.public_url)



    return (
        <div>
          
          



           <h1 className='reviewtitle'>
               {movlist[id - 1]?.title}
            </h1>
            <div className='stuff'>
            <img className='reviewimage' src={movlist[id - 1]?.image_url} />

            </div>
            <div className='reviewcontainer'>
              

            {p?.map((movie) => {
                {console.log(username[1]?.public_url)}
               return <CommunalReviews review={movie} public_url={username[1]?.public_url}
                />
                })
            }
            </div>
            <div className='newreviewcontainer'>
                <form  onSubmit={makeNewReview}>
                <textarea className='reviewtext'
                        placeholder='Your review....'
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    ></textarea>

                <Rating
                  className='reviewrating'
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                  setValue(newValue);
                     }}
                    />     

                <ThemeProvider theme={theme}>

                <Button className='submitreview' variant='contained' color="blue" type='submit' >Submit</Button>
                </ThemeProvider>

                </form> 
            </div>
        </div>
    )
    
    
        // movlist.map((movie) => {
        // <h1>{movie}</h1> }))
}