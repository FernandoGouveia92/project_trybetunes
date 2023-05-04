import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import {
  AlbumContainer,
  AlbumLink,
  AlbunsContainer,
  CardContainer,
  ErrorMessage,
  SearchContent,
  StyledButton,
  StyledInput,
  ContentAnswerContainer,
  StyledLabel,
  Title } from '../styles/search/styles';

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
      artistNotFound: false,
    });
    const { searchValue } = this.state;
    const resultAlbumFetch = await searchAlbumsAPI(searchValue);
    console.log(resultAlbumFetch);
    if (resultAlbumFetch.length === 0) {
      this.setState({
        artistNotFound: true,
        click: false,
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
        <Header />
        <SearchContent data-testid="page-search">
          <StyledLabel htmlFor="searchInput">
            Search
            <StyledInput
              data-testid="search-artist-input"
              type="text"
              name="searchInput"
              value={ searchValue }
              onChange={ this.searchChanges }
            />
          </StyledLabel>
          <StyledButton
            disabled={ btnDisabled.length < searchNumb }
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.handleChange }
          >
            Pesquisar
          </StyledButton>
        </SearchContent>
        {
          artistNotFound ? (
            <ErrorMessage>Nenhum álbum foi encontrado</ErrorMessage>
          ) : (
            <AlbunsContainer>
              {
                loading ? (<Loading />)
                  : (
                    click && (
                      <ContentAnswerContainer>
                        <Title>{`Resultado de álbuns de: ${name}`}</Title>
                        <CardContainer>
                          {searchedArtist.map((e, index) => (
                            <AlbumContainer key={ index }>
                              <img alt="art_work" src={ e.artworkUrl100 } />
                              <p>{e.colectionName}</p>
                              <AlbumLink
                                to={ `/album/${e.collectionId}` }
                                data-testid={ `link-to-album-${e.collectionId}` }
                              >
                                {e.collectionName}
                              </AlbumLink>
                            </AlbumContainer>
                          ))}
                        </CardContainer>
                      </ContentAnswerContainer>
                    )
                  )
              }
            </AlbunsContainer>
          )
        }
      </div>
    );
  }
}

export default Search;
