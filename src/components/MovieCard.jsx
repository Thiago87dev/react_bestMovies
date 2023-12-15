import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import PropTypes from 'prop-types'

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie_card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    showLink: PropTypes.bool,
}

export default MovieCard