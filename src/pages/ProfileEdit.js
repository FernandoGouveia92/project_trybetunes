import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>
          Eu sou o profile edit, o que isso quer dizer,
          n faço ideia
          {/* {this.props.match.params.edit} */}
        </h1>
      </div>
    );
  }
}

export default ProfileEdit;
