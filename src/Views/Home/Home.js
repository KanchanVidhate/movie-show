import React from "react";
import MovCards from './../../data.js';
import MovieCard from "../../components/MovieCard/MovieCard.js";
import "./Home.css";

function Home() {
  return(
    <>
    <h1 className="home">Movies Posters </h1>
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
 </>
  )
}
export default Home