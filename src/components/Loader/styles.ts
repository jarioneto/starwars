import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    border: 7px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
