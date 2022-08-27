import styled from '@emotion/styled';

export const Rotate = styled.logo`
  animation: rotation 30s infinite linear;
  width: 100%;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}`;
