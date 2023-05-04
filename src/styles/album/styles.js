import styled from 'styled-components';

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 15px;
  padding-bottom: 30px;
  gap: 12px;
`;

const AlbumDescripContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #9BA4B5;
  gap: 25px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
`;

const StyledAlbumName = styled.p`
  font-size: 25px;
  font-weight: bolder;
  border-bottom: 4px solid #ccc;
`;

const StyledAlbumArt = styled.img`
  width: 20%;
  max-width: 25%;
`;

const AlbumInfo = styled.div`
  width: 45%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 3px solid #ccc;
  padding: 10px;
`;

export {
  AlbumContainer,
  AlbumDescripContainer,
  StyledH2,
  StyledAlbumName,
  StyledAlbumArt,
  AlbumInfo,
};
