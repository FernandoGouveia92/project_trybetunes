import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4px;
  color: white;
  padding-top: 10px;
`;

const StyledButton = styled.button`
  font-weight: bold;
  padding: 3px;
  border-radius: 8px;
  &:enabled:hover {
    background-color:#007bff;
    color: white;
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  color:white;
`;

const StyledInput = styled.input`
  margin-left: 6px;
  border-radius: 8px;
  border: none;
`;

const AlbunsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
`;

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 80%;
  max-width: 80%;
  color: white;
  font-size: larger;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap:8px;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color:white;
  display: flex;
  justify-self: flex-start;
`;

const AlbumContainer = styled.div`
  width:24%;
  max-width: 45%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: #9BA4B5 ;
  padding: 8px;

  transition: all 0.2s ease-in-out;
  &:hover {
    color:#212A3E;
    transform: scale(1.05)
  }

  p {
    margin-right: 8px;
  }

  img {
    width: 45%;
  }
`;

const AlbumLink = styled(Link)`
  color: black;
  width:45%;
  font-size:large;
  font-weight: bold;
  text-decoration: none;
  /* margin-left: 10px; */
  display: flex;
  text-align: center;
  
  /* border: 2px yellow solid; */
  
  transition: all 0.2s ease-in-out;
  &:hover {
    color:#212A3E;
    transform: scale(1.05)
  }
`;

const ErrorMessage = styled.p`
  color: white;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size:30px;
  font-weight: bold;
  `;

const ContentAnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export {
  SearchContent,
  SearchContainer,
  StyledButton,
  StyledLabel,
  StyledInput,
  ContentAnswerContainer,
  AlbunsContainer,
  CardContainer,
  Title,
  AlbumContainer,
  AlbumLink,
  ErrorMessage,
};
