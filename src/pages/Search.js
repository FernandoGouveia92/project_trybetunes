import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      loading: false,
      searchedArtist: [],
      artistNotFound: false,
      name: '',
      btnDisabled: '',
      click: false,
    };
  }

  searchChanges = ({ target }) => {
    this.setState(({
      searchValue: target.value,
      btnDisabled: target.value,
    }));
  }

  handleChange = async () => {
    this.setState({
      loading: true,
      click: false,
    });
    const { searchValue } = this.state;
    const resultAlbumFetch = await searchAlbumsAPI(searchValue);
    if (resultAlbumFetch.length === 0) {
      this.setState({
        artistNotFound: true,
      });
    }
    this.setState({
      loading: false,
      name: searchValue,
      searchedArtist: resultAlbumFetch,
      click: true,
      searchValue: '',
    });
  }

  render() {
    const {
      searchValue,
      loading,
      searchedArtist,
      artistNotFound,
      name,
      click,
      btnDisabled } = this.state;
    const searchNumb = 2;

    return (
      <div>
        <div data-testid="page-search">
          Search
          <label htmlFor="searchInput">
            <input
              data-testid="search-artist-input"
              type="text"
              value={ searchValue }
              onChange={ this.searchChanges }
            />
          </label>
          <button
            disabled={ btnDisabled.length < searchNumb }
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.handleChange }
          >
            Pesquisar
          </button>
        </div>
        <Header />
        {
          artistNotFound && <p>Nenhum álbum foi encontrado</p>
        }
        {
          loading ? (<Loading />)
            : (
              click && (
                <div>
                  <p>
                    {`Resultado de álbuns de: 
                    ${name}`}
                  </p>
                  {searchedArtist.map((e, index) => (
                    <div key={ index }>
                      <p>{e.colectionName}</p>
                      <Link
                        to={ `/album/${e.collectionId}` }
                        data-testid={ `link-to-album-${e.collectionId}` }
                      >
                        {e.collectionName}
                      </Link>
                    </div>
                  ))}
                </div>
              )
            )
        }
      </div>
    );
  }
}

export default Search;
