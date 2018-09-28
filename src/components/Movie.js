import React from 'react';

import {Link} from "react-router-dom";
import { myConfig } from '../config';

//movie details page
class Movie extends React.Component{

  state = {
    activeMovie: []
  }

  //load selected movie on page load
  componentDidMount = async () => {
    const title = this.props.location.state.title;
    const id = this.props.location.state.id;
    const wsUrl = myConfig.WS_URL;

    const req = await fetch(`${wsUrl}/movies/${id}`);
    const res = await req.json();

    this.setState({ activeMovie: res });
  }

  render(){
    const movie = this.state.activeMovie;
    return(
      <div className="container">
        { this.state.activeMovie.length !== 0 &&
          <div className="active-movie">
            <img className="active-movie__img" src={movie.image_url} alt={movie.title} />
            <h3 className="active-movie__title">{movie.title}</h3>
            <h4 className="active-movie__publisher">Publisher:
            <span>{movie.publisher}</span>
            </h4>
            <p className="active-movie__website">Country:
            <span><a href={movie.country}>{movie.country}</a></span>
            </p>
            <p className="active-movie__website">Release Date:
              <span><a href={movie.release_date}>{movie.release_date}</a></span>
            </p>
            <p className="active-movie__website">Budget:
              <span><a href={movie.budget}>{movie.budget}</a></span>
            </p>
            <p className="active-movie__website">Box Office:
              <span><a href={movie.box_office}>{movie.box_office}</a></span>
            </p>
            <button className="acitve-movie__button">
              <Link to={{pathname: `/`}}>Go Home</Link>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Movie;
