import styled from 'styled-components';

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserImg = styled.img`
  border-radius: 50%;
`;

const UserName = styled.p`
  font-weight: bolder;
`;

const UserEmail = styled.p`
  font-weight: bolder;
`;

const UserDescription = styled.p`
  font-weight: bolder;
`;

const ProfileEditLink = styled.a`
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

const UserImgAndLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export {
  UserProfileContainer,
  UserImg,
  UserInfo,
  UserName,
  UserEmail,
  UserDescription,
  ProfileEditLink,
  UserImgAndLink,
};
