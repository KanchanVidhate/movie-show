import React from "react";
import MovCards from './../../data.js';
import MovieCard from "../../components/MovieCard/MovieCard.js";
import "./Home.css";
import img from './cinema.png';


function Home() {
  return(
    <>
    <div className="main-margin">
   
    <h1 className="home">
    <img src={img} alt="cinema" className="c-img"/>
        Movies </h1>
    {
        MovCards.map((  movieObject,i )=>{
            const {
               name,
               release_date,
                directedBy,
                writenBy,
                producedBy,
                id,
                img,
            } = movieObject;
            return(
                <MovieCard
                key={i}
                name={name}
                release_date={release_date}
                directedBy={directedBy}
                writenBy={writenBy}
                producedBy={producedBy}
                id={id}
                img={img}
                />
            )
            }
              
            )
    }
    </div>
 </>
 
  )
}
export default Home