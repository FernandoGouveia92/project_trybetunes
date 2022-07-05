import React from 'react';
import Header from '../components/Header';
// import { searchAlbumsAPI } from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState(({
      searchValue: target.value,
    }));
  }

  render() {
    const { searchValue } = this.state;
    const searchNumb = 2;
    return (
      <div data-testid="page-search">
        Search
        <Header />
        <label htmlFor="searchInput">
          <input
            data-testid="search-artist-input"
            type="text"
            value={ searchValue }
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ searchValue.length < searchNumb }
          type="submit"
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
