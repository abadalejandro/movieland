import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from '../../actions/index';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="d-flex justify-content-center align-items-center pt-4">
            <label className="label fs-5" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Escribir el titulo"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className="btn btn-outline-danger btn-sm">BUSCAR</button>
          </div>
        </form>

        {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}

        <table className="container align-middle table-sm table table-striped table-hover mt-3 p-5">
          <thead>
            <tr className="">
              <th scope="col" className="fs-6"></th>
              <th scope="col" className="fs-6">Foto</th>
              <th scope="col" className="fs-6">Titulo</th>
              <th scope="col" className="fs-6">Año</th>
              <th scope="col" className="fs-6"></th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.movies?.map((movie, index) => {

                return (
                  <React.Fragment key={movie.imdbID}>

                    <tr>
                      <td className="text-center">{index + 1}</td>

                      <td>
                        <Link to={`/movie/${movie.imdbID}`}>
                          <img src={movie.Poster} alt="" />
                        </Link>
                      </td>

                      <td >
                        <div>
                          <Link to={`/movie/${movie.imdbID}`}>
                            {movie.Title}
                          </Link>
                        </div>
                      </td>

                      <td>
                        <div>
                          {movie.Year.replace('–', ' ')}
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => this.props.addMovieFavorite({ title: movie.Title, id: movie.imdbID, year: movie.Year })}>Add to Favorite</button>
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
    movies: state.moviesLoaded

  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


