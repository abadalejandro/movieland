import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <div className="container">
        <h2 className="text-center mt-4">Películas Favoritas</h2>
        {/* Aqui deberias poner tu lista de peliculas! */}
        <table className="table mt-3 table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="fs-6" id="titulo-numero">Numero</th>
              <th scope="col" className="fs-6">Titulo</th>
              <th scope="col" className="fs-6">Año</th>
              <th scope="col" className="fs-6"></th>
            </tr>
          </thead>
          <tbody>
            {
               this.props.movies.map((movie, index) => {
                return (
                  <React.Fragment key={movie.id}>
                    <tr>

                      <td className="">
                        <div className="mx-5">
                          {index + 1}
                        </div>
                      </td>

                      <td >
                        <Link to={`/movie/${movie.id}`}>
                          {movie.title}
                        </Link>
                      </td>

                      <td>
                        <div>
                          {movie.year.replace('–', '')}
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => this.props.removeMovieFavorite({ id: movie.id })}>Delete</button>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </table>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);


