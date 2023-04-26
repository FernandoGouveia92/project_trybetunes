import React from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import { FieldsContainer,
  LoginButton,
  LoginContainer,
  LoginLabel,
  LoginTitle,
  LoginInputField } from '../styles/login/styles';

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
      <LoginContainer>
        {
          userCreated && <Redirect to="/search" />
        }
        {
          loading ? (<Loading />)
            : (
              <FieldsContainer data-testid="page-login">
                <LoginTitle>Trybetunes</LoginTitle>
                <LoginLabel htmlFor="userNameInput">
                  Insira seu nome
                  <LoginInputField
                    data-testid="login-name-input"
                    name="userName"
                    type="text"
                    value={ userName }
                    onChange={ this.changes }
                  />
                </LoginLabel>
                <LoginButton
                  htmlFor="btnEnter"
                  type="submit"
                  name="btnStatus"
                  data-testid="login-submit-button"
                  disabled={ userName.length < btnNum }
                  onClick={ this.btnValidator }
                >
                  Entrar
                </LoginButton>
              </FieldsContainer>
            )
        }
      </LoginContainer>
    );
  }
}

export default Login;
