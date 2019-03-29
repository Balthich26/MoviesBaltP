import React from 'react';
import PropTypes from 'prop-types';
import * as style from './Home.styles';

const Home = ({movies, searchInput, submitValue }) => (
<style.Container>
    <style.Titre>VIDEO CLUB</style.Titre>
    <form onSubmit={submitValue}>
      <style.Search placeholder="Nom du film..." ref={searchInput}/>
      <style.Submit type="submit">Rechercher</style.Submit>
    </form>
    {movies.length > 0 && (
      <style.List>
        {movies.map((movie) => ( 
          <style.Movie key={movie.imdbID}>
            <style.Poster src={movie.Poster}/>
            <style.StyledLink to={`/movie/${movie.imdbID}`}>
              {movie.Title}
            </style.StyledLink>
          </style.Movie>
        ))}
      </style.List>
    )}
  </style.Container>
);

Home.prototypes = {
  searchInput: PropTypes.object.isRequired,
  submitValue: PropTypes.func.isRequired,
};

export default Home;
