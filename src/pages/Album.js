import React from 'react';
import Header from '../components/Header';
// import { getMusics } from '../services/musicsAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      // albumReturned: [],
    };
  }

  // infoAlbum = async (target) => {
  //   const { albumReturned } = this.state;
  //   const albumShow = await getMusics(target);
  // }

  render() {
    return (
      <div data-testid="page-album">
        Eu sou o Album
        <Header />
        {/* <div name="musics">

        </div> */}
      </div>
    );
  }
}

export default Login;
