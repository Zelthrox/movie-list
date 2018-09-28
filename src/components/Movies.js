import React from 'react';

import {Link} from 'react-router-dom';

//list of movies
const Movies = props => (
  <div className="container">
    <div className="row">
      { props.movies &&
        props.movies.map((movie) => {
          return (
            <div key={movie._id} className="col-md-3" style={{marginBottom:"2rem"}}>
              <div className="movies__box">
                <img
                  className="movie__box-img"
                  src={movie.image_url}
                  alt={movie.title}
                />
                <div className="movie__text">
                  <h5 className="movies__title">
                    {movie.title.length < 20 ? `${movie.title}` : `${movie.title.substring(0,20)}...`}
                  </h5>
                  <h5 className="movies__subtitle">Release:
                    <span>{movie.release_date}</span>
                  </h5>
                </div>
                <button className="movie_buttons">
                  <Link
                    to={{
                      pathname: `/movie/${movie._id}`,
                      state: {
                        movie: movie.title,
                        id: movie._id
                      }
                    }}>View Movie
                  </Link>
                </button>
              </div>
            </div>
          );
        })
      }
    </div>
  </div>
)

export default Movies;


