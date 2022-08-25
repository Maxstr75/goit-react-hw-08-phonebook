import styled from '@emotion/styled';

export const Item = styled.li`
  margin: 0;
  padding: 0;
`;

export const divItemContainer = styled.container`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const Button = styled.button`
  width: 80px;
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
