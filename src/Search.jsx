import React from "react";
import { useState } from "react";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";


const Search = ({API_KEY}) => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    
    const searchMovies = async (title) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return(
        <div>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            searchMovies(searchTerm)
                        }
                    }}
                />
                <img 
                    src={SearchIcon} 
                    alt="Search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
            
            {/* <SearchResults movies={movies}/> */}
        </div>
    )
}

export default Search;