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
  padding: 3px;
  border-radius: 8px;
  border: none;
`;

const AlbunsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 9px;

`;

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 80%;
  color: white;
  font-size: large;
  display:flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap:8px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color:white;
  display: flex;
  /* justify-self: flex-start; */
`;

const AlbumContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #9BA4B5 ;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color:#212A3E;
    transform: scale(1.05)
  }

  img {
    display: flex;
    align-self: center;
    width: 150px;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`;

const AlbumLink = styled(Link)`
  color: black;
  width: 150px;
  font-size:large;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
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
  flex-wrap: wrap;
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
