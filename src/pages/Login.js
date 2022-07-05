import React from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
      userCreated: false,
    };
  }

  changes = ({ target }) => {
    this.setState(({
      userName: target.value,
    }));
  }

  btnValidator = async () => {
    this.setState({
      loading: true,
    });
    const { userName } = this.state;
    await createUser({ name: userName });
    this.setState({
      userCreated: true,
      loading: false,
    });
  }

  render() {
    const btnNum = 3;
    const { userName, loading, userCreated } = this.state;

    return (
      <div>
        {
          userCreated && <Redirect to="/search" />
        }
        {
          loading ? (<Loading />)
            : (
              <div data-testid="page-login">
                <label htmlFor="userNameInput">
                  Insira seu nome
                  <input
                    data-testid="login-name-input"
                    name="usarName"
                    type="text"
                    // value={ userName }
                    onChange={ this.changes }
                  />
                </label>
                <button
                  htmlFor="btnEnter"
                  type="submit"
                  name="btnStatus"
                  data-testid="login-submit-button"
                  disabled={ userName.length < btnNum }
                  onClick={ this.btnValidator }
                >
                  Entrar
                </button>
              </div>
            )
        }
      </div>
    );
  }
}

export default Login;
