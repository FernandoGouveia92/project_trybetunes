import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      album: [],
      musicList: [],
      loading: true,
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
  }

  render() {
    const { album, musicList, loading } = this.state;
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
