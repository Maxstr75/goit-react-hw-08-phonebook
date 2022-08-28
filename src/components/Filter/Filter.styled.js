import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  outline: none;
  height: 15px;
  padding: 2.5px;
  &:hover,
  &:focus {
    border-color: #4b0082;
  }
`;
