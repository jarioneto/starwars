import styled from 'styled-components';

interface Props {
  loading: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 50px;
  animation: ${({ loading }) =>
    loading ? undefined : 'fade 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'};

  > div:nth-child(2) {
    animation: ${({ loading }) =>
      loading ? undefined : 'showIn 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'};
  }

  @keyframes fade {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes showIn {
    0% {
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 100%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 52px;

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }

  svg {
    cursor: pointer;
    margin-right: 12px;
    transition: transform 0.7s;

    path {
      fill: ${({ theme }) => theme.colors.secondary};
    }

    &:hover {
      transform: translateX(-4px);
    }
  }

  @media screen and (max-width: 800px) {
    padding-left: 35px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;

  > button {
    width: 347px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 800px) {
    justify-content: space-evenly;

    > button {
      order: 2;
      margin-bottom: 20px;
      margin-top: 40px;
      width: 100%;
      max-width: 320px;
    }
  }
`;
