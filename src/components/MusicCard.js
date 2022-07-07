import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);

    const { checkedStatus } = this.props;
    this.state = {
      inputStatus: checkedStatus,
    };
  }

  componentDidMount() {
    this.isFavorite();
    // console.log(this.isFavorite());
  }

  isFavorite = () => {
    const { favoriteMusic, trackId } = this.props;
    const favStatus = favoriteMusic.some((e) => e.trackId === trackId);
    console.log(favoriteMusic);
    console.log(trackId);
    this.setState({
      inputStatus: favStatus,
    });
  }

  handleChange = ({ target }) => {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
    }, async () => {
      const { trackName, previewUrl, trackId } = this.props;
      const { inputStatus } = this.state;
      if (inputStatus === true) {
        await addSong({ trackName, previewUrl, trackId });
      } else {
        // await removeSong({ trackName, previewUrl, trackId });
      }
    });
  }

  render() {
    const { inputStatus } = this.state;
    const { trackName, previewUrl, trackId, favoriteMusic } = this.props;
    console.log(favoriteMusic);
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="favorita" data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            name="inputStatus"
            checked={ inputStatus }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  // handleChange: PropTypes.func.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
};

export default MusicCard;
