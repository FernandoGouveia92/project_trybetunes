import styled from 'styled-components';

const Container = styled.div`
  width:30%;
  max-width: 400px;
`;

const StyledAudio = styled.audio`
  display: block;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const TrackWrapper = styled.section`
  background-color: #9BA4B5;
  padding: 6px;
  width: 100%;
  border-radius: 8px;
`;

const StyledMusicName = styled.p`
  font-weight: bold;
  margin-bottom: 1.1rem;
`;

const StyledInput = styled.input`
  margin-left: 1rem;
  width: 10px;
  height: 10px;
`;

export {
  StyledAudio,
  StyledLabel,
  TrackWrapper,
  StyledMusicName,
  Container,
  StyledInput,
};
