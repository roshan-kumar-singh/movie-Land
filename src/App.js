import {useState,useEffect} from "react";

import './App.css';
import MovieCard from "./MovieCard";    

import SearchIcon from './search.svg';
// 1534875b

const API_URL ='http://www.omdbapi.com?apikey=1534875b';

const movie1={
"Title": "Amazing spiderman Syndrome",
"Year": "2021",
"imdbID":"tt2586634",
"Type":"movie",
"poster": "N/A"
}

const App = () => {

    const [movies,setMovies] =useState([]);

    const[searchTerm,setSearchTerm]=useState('');

const searchMovies=async(title)  =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies(`Spiderman`);

    },[]);

    return(
        <div className="app">
        <h1>movieLand</h1>

        <div className="search">
            <input
             placeholder="Search for movies"
             value={searchTerm}
             onChange={(e) => {setSearchTerm(e.target.value)}}

            />
            <img 
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
            />
            </div>
            {movies?.length>0
             ?(
                <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
                </div>
             ):
             (
                <div className="empty">
                <h2>No movie found</h2>

                </div>
             )
            }
        </div>
    );
}

export default App;