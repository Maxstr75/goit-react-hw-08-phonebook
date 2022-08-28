import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 360px;
  border-radius: 5px;
  padding: 10px;
  background-color: tomato;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-top: 5px;
  outline: none;
  &:hover,
  &:focus {
    border-color: #604af0f5;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.774);
  border: 0.5px solid grey;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #604af0f5;
    color: white;
    border: none;
  }
`;
