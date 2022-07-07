import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      album: [],
      musicList: [],
      loading: true,
      favoriteMusic: [], // VAI GUARDAR MINHAS MÚSICAS FAVORITAS
    };
  }

  componentDidMount() {
    this.getAlbum();
  }

  componentWillUnmount() {
    this.getAlbum();
  }

  getAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const [album, ...musicList] = await getMusics(id);
    this.setState({
      musicList,
      album,
      loading: false,
    });
    const pullFavSong = await getFavoriteSongs();
    this.setState({
      favoriteMusic: pullFavSong,
    });
  }

  render() {
    const { album, musicList, loading, favoriteMusic } = this.state;
    console.log(favoriteMusic);
    return (
      <div data-testid="page-album">
        <Header />
        {
          loading ? <Loading />
            : (
              <div>
                <h2 data-testid="artist-name">{ album?.artistName}</h2>
                <p data-testid="album-name">{ album?.collectionName}</p>
              </div>
            )
        }
        {
          musicList.map((e) => (
            <MusicCard
              key={ e.trackId }
              trackName={ e.trackName }
              previewUrl={ e.previewUrl }
              trackId={ e.trackId }
              favoriteMusic={ favoriteMusic }
              checkedStatus={ !!favoriteMusic.some((ee) => ee.trackId === e.trackId) }
            />
          ))
        }
      </div>
    );
  }
}

Login.propTypes = {
  match: propTypes.string.isRequired,
  params: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default Login;
