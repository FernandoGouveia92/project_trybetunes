import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <h1>
          Eu sou o profile edit, o que isso quer dizer,
          n faço ideia
          {this.props.match.params.edit}
        </h1>
      </div>
    );
  }
}

export default Login;
