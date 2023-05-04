import React from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import {
  ProfileEditLink,
  UserDescription,
  UserEmail,
  UserImg,
  UserImgAndLink,
  UserInfo,
  UserName,
  UserProfileContainer } from '../styles/profile/styles';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  componentDidUpdate() {
    this.handleChange();
  }

  handleChange = async () => {
    const user = await getUser();
    this.setState({
      user,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <UserProfileContainer>
          {
            loading ? <Loading />
              : (
                <UserInfo>
                  <UserImgAndLink>
                    <UserImg alt="User" src={ user.image } data-testid="profile-image" />
                    <ProfileEditLink href="/profile/edit">Editar Perfil</ProfileEditLink>
                  </UserImgAndLink>
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                    <UserDescription>{user.description}</UserDescription>
                  </div>
                </UserInfo>
              )
          }
        </UserProfileContainer>
      </div>
    );
  }
}

export default Profile;
