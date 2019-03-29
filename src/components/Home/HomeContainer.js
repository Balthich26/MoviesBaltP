import React, { Component, createRef } from 'react';
import queryString from 'query-string';
import api from '../../helpers/api';
import Home from './Home';
import { apiUrl } from '../../constents/config';

class HomeContainer extends Component {
  state = {
    movies: [],
  }
  searchInput = createRef();
  submitForm = (event) => {
    event.preventDefault(); //annuler le comportement par deafut d'un form (recharger la page)
    const query = this.searchInput.current.value;
    // Add query to apiUrl
    //fetch data then console log response 
    //catch if error
    try {
      fetch(apiUrl(query)).then(resp => { 
        resp.json().then(response => {
          this.setState({movies: response.Search})
        })
      });
    } catch (error) {
      alert('Pas de film de ce nom');
    }
    
  }
  render() {
    const { movies } = this.state;
    return <Home movies={movies} searchInput={this.searchInput} submitValue={this.submitForm} />;
  }
}

export default HomeContainer;
