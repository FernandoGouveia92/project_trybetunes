import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <a href="/search">Search</a>
        <a href="/album/:id">Album</a>
        <a href="/favorites">Favorites</a>
        <a href="/profile">Profile</a>
        <a href="/profile/edit">Profile Edit</a>
      </header>
    );
  }
}

export default Header;
