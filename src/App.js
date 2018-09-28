import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar';
import Movies from './components/Movies';
import { myConfig } from './config';

//main page
class App extends Component {
  state = {
    movies: []
  }

  //load searched movies
  getMovie = async (e) => {
    e.preventDefault();

    const movieName = e.target.elements.movieName.value;
    const wsUrl = myConfig.WS_URL;

    const api_call = await fetch(`${wsUrl}/movies?title=${movieName}`);
    const data = await api_call.json();

    this.setState({
      movies: data
    });
  }

  //load previous search on page load
  componentDidMount = () => {
    const json = localStorage.getItem('movies');
    const movies = JSON.parse(json);
    this.setState({movies});
  }

  //save search into localstorage
  componentDidUpdate = () => {
    const movies = JSON.stringify(this.state.movies);
    localStorage.setItem('movies', movies);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Data List</h1>
        </header>
        <Searchbar getMovie={this.getMovie} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
