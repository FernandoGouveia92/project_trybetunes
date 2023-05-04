import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Form from '../styles/profileEdit/styles';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      description: '',
      picture: '',
      loading: true,
      buttonStatus: 'true',
      userUpdated: false,
    };
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  fetchUserInfo = async () => {
    const userInfo = await getUser();
    console.log(userInfo);
    this.setState({
      name: userInfo.name,
      email: userInfo.email,
      description: userInfo.description,
      picture: userInfo.image,
      loading: false,
    });
  }

  emailValidation = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  fieldsValidation = (name, email, description) => {
    if (!name && !email && !description) {
      return false;
    }
    return true;
  }

  handleSubmit = async (event) => {
    const { name, email, description, picture } = this.state;
    event.preventDefault();
    const updatedUser = {
      name,
      email,
      description,
      picture,
    };
    if (
      this.emailValidation(email)
      && this.fieldsValidation(name, description, picture)
    ) {
      this.setState({
        buttonStatus: false,
      });
      await updateUser(updatedUser);
      this.setState({ userUpdated: true });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      name,
      email,
      description,
      picture,
      loading,
      buttonStatus,
      userUpdated } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          userUpdated && <Redirect to="/profile" />
        }
        {
          loading ? <Loading />
            : (
              <Form onSubmit={ this.handleSubmit }>
                <label htmlFor="userName">
                  Nome:
                  <input
                    data-testid="edit-input-name"
                    name="name"
                    type="text"
                    value={ name }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userEmail">
                  E-mail:
                  <input
                    data-testid="edit-input-email"
                    name="email"
                    type="text"
                    value={ email }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userDescription">
                  Description:
                  <input
                    data-testid="edit-input-description"
                    name="description"
                    type="text"
                    value={ description }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="userImage">
                  Picture:
                  <input
                    data-testid="edit-input-image"
                    name="picture"
                    type="file"
                    value={ picture }
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
              </Form>
            )
        }
      </div>
    );
  }
}

export default ProfileEdit;
