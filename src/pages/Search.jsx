import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get('q')

  const getSearchMovies = async (url) => {
    try {
      const res = await fetch(url);
      if(!res.ok){
        throw new Error(`Erro na requisição:${res.statusText}`)
      }
      const data = await res.json();

      // ordenando os filmes do mais bem avaliado ao menos bem avaliado.
      const sortedMovies = data.results.sort((a, b) => b.vote_average - a.vote_average)
      
      setMovies(sortedMovies);
    } catch (error) {
      console.error(error);
      setMovies([])
    }

  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query_text">{query}</span>
      </h2>
      <div className="movies_container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
