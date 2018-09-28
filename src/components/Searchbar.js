import React from 'react';

//movie title search bar
const Searchbar = props => (
  <form onSubmit={props.getMovie} style={{ marginBottom:"2rem"}}>
    <input className="form__input" type="text" name="movieName" />
    <button className="form__button">Search</button>
  </form>
)

export default Searchbar;
