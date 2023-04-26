import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import {
  Container,
  StyledAudio,
  StyledInput,
  StyledLabel,
  StyledMusicName,
  TrackWrapper } from '../styles/musicCard/styles';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);

    const { checkedStatus } = this.props;
    this.state = {
      inputStatus: checkedStatus,
      loading: false,
    };
  }

  componentDidMount() {
    this.isFavorite();
    getFavoriteSongs();
    // console.log(this.isFavorite());
  }

  isFavorite = async () => {
    const { trackId } = this.props;
    const favoriteSongsGot = await getFavoriteSongs();
    const favStatus = favoriteSongsGot.some((e) => e.trackId === trackId);
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
        this.setState({
          loading: true,
        });
        await addSong({ trackName, previewUrl, trackId });
        this.setState({
          loading: false,
        });
      } else {
        await removeSong({ trackName, previewUrl, trackId });
      }
    });
  }

  render() {
    const { inputStatus, loading } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <Container>
        {
          loading ? <Loading />
            : (
              <TrackWrapper>
                <StyledMusicName>{ trackName }</StyledMusicName>
                <StyledAudio data-testid="audio-component" src={ previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </StyledAudio>
                <StyledLabel
                  htmlFor={ trackId }
                  data-testid={ `checkbox-music-${trackId}` }
                >
                  Favorita
                  <StyledInput
                    id={ trackId }
                    type="checkbox"
                    name="inputStatus"
                    checked={ inputStatus }
                    onChange={ this.handleChange }
                  />
                </StyledLabel>
              </TrackWrapper>
            )
        }
      </Container>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  checkedStatus: PropTypes.bool.isRequired,
};

export default MusicCard;
