import React from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import {
  FieldDescription,
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
      name: '',
      email: '',
      description: '',
      picture: '',
      loading: true,
      stockPhoto: '',
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  componentWillUnmount() {
    this.handleChange();
  }

  handleImgError = () => {
    const defaultImgUrl = 'https://images.unsplash.com/photo-1519681393784-d120267933ba';
    this.setState({ stockPhoto: defaultImgUrl });
  };

  handleChange = async () => {
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

  render() {
    const { name, email, description, picture, loading, stockPhoto } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <UserProfileContainer>
          {
            loading ? <Loading />
              : (
                <UserInfo>
                  <UserImgAndLink>
                    <UserImg
                      alt="User"
                      value={ picture && stockPhoto }
                      data-testid="profile-image"
                      onError={ this.handleImgError }
                    />
                    <ProfileEditLink href="/profile/edit">Editar Perfil</ProfileEditLink>
                  </UserImgAndLink>
                  <userTextData>
                    <FieldDescription>
                      Nome:
                      {' '}
                    </FieldDescription>
                    <UserName>
                      {name}
                    </UserName>
                    <FieldDescription>
                      E-mail:
                      {' '}
                    </FieldDescription>
                    <UserEmail>
                      {email}
                    </UserEmail>
                    <FieldDescription>
                      Description:
                      {' '}
                    </FieldDescription>
                    <UserDescription>
                      {description}
                    </UserDescription>
                  </userTextData>
                </UserInfo>
              )
          }
        </UserProfileContainer>
      </div>
    );
  }
}

export default Profile;
