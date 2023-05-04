import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  margin-left: 8px;
  margin-top: 8px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-weight: bold;
    color: white;
  }

  input[type="text"], input[type="file"] {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button[type="submit"] {
    margin-top: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #0077b6;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default Form;
