import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
        // manera convencional
        this.movieId = this.props.match.params.id;
        // usando destructuring
        // const { match: { params: { id }}} = this.props;
    }

    render() {

        return (
            <div className="movie-main-container">
                <div className="movie-container">
                    <img className="movie-child red-child" src={this.props.movieDetail?.Poster} alt="Film" />

                    <div className="movie-child movie-info" >
                        <h3 >{this.props.movieDetail?.Title}</h3>
                        <div id="div-movie-subinfo">
                            <p>Año: <small>{this.props.movieDetail?.Year}</small></p>
                            <p>Duración: <small>{this.props.movieDetail?.Runtime}</small></p>
                        </div>
                        <p>Género: <small>{this.props.movieDetail?.Genre}</small></p>
                        <p id='movie-detail'>{this.props.movieDetail?.Plot}</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState();
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);

    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movieId => dispatch(getMovieDetail(movieId)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);