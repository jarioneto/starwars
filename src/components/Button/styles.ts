import styled from 'styled-components';

export const ButtonBase = styled.button.attrs((props) => ({
  type: 'button',
  ...props
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme?.colors?.secondary};
  color: ${({ theme }) => theme?.colors?.primary};
  height: 56px;
  padding: 2px 17px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.7s;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;

  > div,
  div > div {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }

  &:hover {
    transform: perspective(1px) scale(1.05);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.9;
  }
`;
