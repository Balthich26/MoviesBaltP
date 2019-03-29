import React from 'react';
import * as style from './Movie.styles';

const Movie = ({movie}) => (
    <style.Container>
      <style.Titre>VIDEO CLUB</style.Titre>
      <style.Container row>
        <style.List>
          <style.Titre h2>{movie.Title}({movie.Year})</style.Titre>
          <style.Movie>
            <style.Poster src={movie.Poster} alt="converture du film"/>
          <style.Container start>
            <style.Text><b>Director:  </b>  {movie.Director}</style.Text>
            <style.Text><b>Acteurs:  </b>  {movie.Actors}</style.Text>
            <style.Text><b>Genre:  </b>  {movie.Genre}</style.Text>
            <style.Text><b>Durée:  </b>  {movie.Runtime}</style.Text>
            <style.Text><b>Pays:  </b>  {movie.Country}</style.Text>
            <style.Text><b>Box office:  </b>  {movie.BoxOffice}</style.Text>
            <style.Text><b>Synopsis:  </b>  {movie.Plot}</style.Text>
          </style.Container>
          </style.Movie>
          
        </style.List>
      </style.Container>
    </style.Container>
);

export default Movie;