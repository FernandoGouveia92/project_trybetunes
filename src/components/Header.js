import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import {
  HeaderContainer,
  HeaderUserName,
  Nav,
  NavLink } from '../styles/header/styles';

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
    return (
      <p>
        Olá,
        {' '}
        {showName.name}
      </p>);
  }

  render() {
    return (
      <HeaderContainer data-testid="header-component">
        <HeaderUserName data-testid="header-user-name">
          { this.showUserName() }
        </HeaderUserName>
        <Nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/search" data-testid="link-to-search">
            Search
          </NavLink>
          <NavLink to="/favorites" data-testid="link-to-favorites">
            Favorites
          </NavLink>
          <NavLink to="/profile" data-testid="link-to-profile">
            Profile
          </NavLink>
        </Nav>
      </HeaderContainer>
    );
  }
}

export default Header;
