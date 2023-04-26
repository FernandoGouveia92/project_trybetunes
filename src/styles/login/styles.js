import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const FieldsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #9BA4B5;
  border-radius: 5px;
  padding: 30px;
  margin: auto 0;
`;

const LoginTitle = styled.h1`
  font-weight: bolder;
  margin-bottom: 18px;
`;

const LoginLabel = styled.label`
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
`;

const LoginButton = styled.button`
  font-weight: bold;
  padding: 3px;

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
