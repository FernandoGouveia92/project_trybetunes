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
  flex-direction: column;
  height: 50%;
  width: 40%;
  gap: 8px;
  border-radius: 8px;
  background-color: #9BA4B5;
  padding: 15px;
`;

const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const UserName = styled.p`
  margin-top: 4px;
`;

const UserEmail = styled.p`
  margin-top: 4px;
`;

const UserDescription = styled.p`
  margin-top: 4px;
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

const userTextData = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const FieldDescription = styled.p`
  font-weight: bolder;
  margin-top: 10px;
`;

export {
  UserProfileContainer,
  UserImg,
  UserInfo,
  UserName,
  UserEmail,
  FieldDescription,
  UserDescription,
  ProfileEditLink,
  userTextData,
  UserImgAndLink,
};
