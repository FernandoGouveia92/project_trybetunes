import styled from 'styled-components';

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 12px;
`;

const AlbumDescripContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #9BA4B5;
`;

const StyledH2 = styled.h2`
  /* color: white; */
`;

const StyledAlbumName = styled.p`
  /* color: white; */
`;

export {
  AlbumContainer,
  AlbumDescripContainer,
  StyledH2,
  StyledAlbumName,
};
