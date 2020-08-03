import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  animation: fadeInLeft 1s ease;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Content = styled.div`
  margin-top: 18vh;
  color: #2c97d1;

  h2 {
    font-weight: normal;
    font-size: 72px;
    line-height: 88px;
    text-align: center;

    strong {
      font-weight: bold;
    }
  }

  h5 {
    font-weight: normal;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 17px;
    letter-spacing: 0.35em;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 189px;
    background: #2c97d1;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
  }
`;
