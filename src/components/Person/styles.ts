import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 380px;
    max-width: 100%;
    border-radius: 50%;
  }

  h5 {
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    margin-top: 50px;

    strong {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 800px) {
    > img {
      width: 302px;
    }

    > h5 {
      strong {
        display: inline-block;
      }
    }
  }
`;
