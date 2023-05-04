import styled from 'styled-components';
import listenToMusic from '../../images/listenToMusic.jpg';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(${listenToMusic});
  background-size: cover;
`;

const FieldsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 30px;
  margin: auto 0;
`;

const LoginTitle = styled.h1`
  font-weight: bolder;
  color: white;
  font-size: 60px;
  margin-bottom: 18px;
`;

const LoginLabel = styled.label`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 8px;
`;

const LoginInputField = styled.input`
  border-radius: 8px;
  border: none;
  text-align:center;
  padding: 3px;
`;

const LoginButton = styled.button`
  font-weight: bold;
  margin-top: 9px;
  padding: 3px;
  border: none;

  &:enabled:hover {
    background-color:#007bff;
    color: white;
    cursor: pointer;
  }
`;

export {
  LoginContainer,
  FieldsContainer,
  LoginLabel,
  LoginButton,
  LoginTitle,
  LoginInputField,
};
