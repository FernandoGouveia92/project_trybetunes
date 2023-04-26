import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import GlobalStyles from './styles/GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <GlobalStyles />
          <Switch>
            <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="/search" component={ Search } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/" component={ Login } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
