import React, {useState, useEffect }from 'react'
import axios from '../api/axios';
import requests from '../api/request';
import './Banner.css';



const base_url ="https://image.tmdb.org/t/p/original/";



const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function getDate(){
            let request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        getDate();

    },[]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }

  return (
    <header className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
    }}
    >
        <div className='banner-content'> </div>
         <h1 className='banner-title'>  { movies?.title || movies?.name || movies?.original_name}
       </h1>

        <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>

        </div>
        <h1 className='banner-description'>
            { truncate(movies?.overview, 150)}
        </h1>
        <div className='.banner-fadebottom'></div>
        
    </header>
  )
}

export default Banner