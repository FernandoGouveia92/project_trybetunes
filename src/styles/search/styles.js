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
  justify-content: flex-start;
  flex-direction: column;
  gap: 9px;
`;

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 800px;
  color: white;
  font-size: larger;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AlbumContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #FFFFFF; */
  margin-bottom: 16px;
  
  p {
    margin-right: 8px;
  }
`;

const AlbumLink = styled(Link)`
  color: #0070F3;
  font-weight: bold;
`;

export {
  SearchContent,
  SearchContainer,
  StyledButton,
  StyledLabel,
  StyledInput,
  AlbunsContainer,
  CardContainer,
  Title,
  AlbumContainer,
  AlbumLink,
};
