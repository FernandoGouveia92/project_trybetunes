import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #F1F6F9;
`;

const HeaderUserName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  padding: 0.5rem;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

export {
  HeaderContainer,
  HeaderUserName,
  Nav,
  NavLink,
};
