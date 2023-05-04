import styled from 'styled-components';

const Container = styled.div`
  width:60%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const StyledAudio = styled.audio`
  display: block;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 1.2rem;
  width: 20%;
  color: white;
  gap:8px;
`;

const TrackWrapper = styled.section`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: #9BA4B5; */
  padding: 8px;
  width: 100%;
  border-radius: 10px;
`;

const StyledMusicName = styled.p`
  width: 25%;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  margin-bottom: 1.1rem;
`;

const StyledInput = styled.input`
  margin-left: 5px;
  width: 20px;
  height: 15px;
  display: none;
`;

export {
  StyledAudio,
  StyledLabel,
  TrackWrapper,
  StyledMusicName,
  Container,
  StyledInput,
};
