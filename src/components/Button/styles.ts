import styled from 'styled-components';

export const ButtonBase = styled.button.attrs((props) => ({
  type: 'button',
  ...props
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme?.colors?.secondary || '#2C97D1'};
  color: ${({ theme }) => theme?.colors?.primary || '#FFFFFF'};
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
    transform: perspective(1px) scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
