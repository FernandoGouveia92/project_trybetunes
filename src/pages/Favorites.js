import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import FavoritesContainer from '../styles/favorites/styles';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      favoriteStatus: true,
      loading: true,
    };
  }

  componentDidMount() {
    this.handleFavorites();
  }

  componentDidUpdate() {
    this.handleFavorites();
  }

  handleFavorites = async () => {
    const favSongs = await getFavoriteSongs();
    this.setState({
      songs: favSongs,
      loading: false,
    });
  }

  render() {
    const { loading, songs, favoriteStatus } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <FavoritesContainer>
          {
            loading ? <Loading />
              : (
                songs.map((song) => (
                  <MusicCard
                    key={ song.trackId }
                    trackName={ song.trackName }
                    previewUrl={ song.previewUrl }
                    trackId={ song.trackId }
                    favoriteMusic={ favoriteStatus }
                  />
                ))
              )
          }
        </FavoritesContainer>
      </div>
    );
  }
}

export default Favorites;
