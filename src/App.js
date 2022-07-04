import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  // changes = ({ target }) => {
  //   const { userName } = this.state;
  //   const { name, value } = target;
  //   const minChar = 3;
  //   if (userName.length >= minChar) {
  //     this.setState(({
  //       [name]: value,
  //       btnStatus: false,
  //     }),
  //     () => this.createUser({ name: userName }));
  //   }
  // }

  render() {
    return (
      <div>
        <p>TrybeTunes!</p>
        <p>TrybeTunes!</p>
        <Header />
        <switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </switch>
      </div>
    );
  }
}

export default App;
// btnValidator={ () => createUser({ name: userName }) }
