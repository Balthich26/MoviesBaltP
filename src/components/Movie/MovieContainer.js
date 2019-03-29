import  React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Movie from './Movie';
import { apiUrlFilm } from '../../constents/config';

class MovieContainer extends Component {
    state = {
        movie: null,
    };
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(apiUrlFilm(id)).then(resp => { 
            resp.json().then(response => {
              this.setState({movie: response}) 
            })
          }); 
        // je dois fetch quelquechose avec l'id puis donner la data à <Movie /> pour pouvoir l'aficher
    }
    render() {
        const { movie } = this.state;
        console.log(movie);
        if (!movie) return null;
        return <Movie movie={movie} />;
    }
}

export default withRouter(MovieContainer);