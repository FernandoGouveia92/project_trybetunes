import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: null,
    };
  }

  showUserName = () => {
    const { showName } = this.state;
    if (showName === null) {
      getUser().then((response) => this.setState({ showName: response }));
      return <Loading />;
    }
    return <p>{showName.name}</p>;
  }

  render() {
    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">{ this.showUserName() }</h1>
        <nav>
          <Link to="/search" data-testid="link-to-search">
            Search
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favorites
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            Profile
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
