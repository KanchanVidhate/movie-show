import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";



function MovieCard ({
    name,
    release_date,
     directedBy,
     writenBy,
     producedBy,
     id,
     img,
}){
    return(
        <>
        <div className="main-contain">
            
       <div className="movie-card ">
            <Link to={`/movie/${id}`}>
                <img src={img} alt={name} className="img" />
            </Link>
            <p className="movie-card-info">
                <h3>{name}</h3>
                <p>Directed By: {directedBy}</p>
                <p>Written By: {writenBy}</p>
                <p>Produced By: {producedBy}</p>
                <p>Release Date: {release_date}</p>
            </p>
        </div>
        </div>
        
        </>
    )
}



export default MovieCard;