import React from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
      buttonStatus: 'true',
    };
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  fetchUserInfo = async () => {
    const user = await getUser();
    this.setState({
      user,
      loading: false,
    });
  }

  // Returns a boolean
  emailValidation = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  // Returns a boolean
  fieldsValidation = () => {
    if (user.name && user.email && user.description) {
      return true;
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.emailValidation && this.fieldsValidation) {
      this.setState({
        buttonStatus: false,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  }

  render() {
    const { user, loading, buttonStatus } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          loading ? <Loading />
            : (
              <form onSubmit={ this.handleSubmit }>
                <label htmlFor="userName">
                  Nome:
                  <input
                    data-testid="edit-input-name"
                    name="userName"
                    type="text"
                    value={ user.name }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userEmail">
                  E-mail:
                  <input
                    data-testid="edit-input-email"
                    name="userEmail"
                    type="text"
                    value={ user.email }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userDescription">
                  Description:
                  <input
                    data-testid="edit-input-description"
                    name="userDescription"
                    type="text"
                    value={ user.description }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userImage">
                  Picture:
                  <input
                    data-testid="edit-input-image"
                    name="userImage"
                    type="file"
                    value={ user.image }
                    onChange={ this.handleChange }
                  />
                </label>
                <button
                  data-testid="edit-button-save"
                  type="submit"
                  disable={ buttonStatus }
                >
                  Confirmar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

export default ProfileEdit;
