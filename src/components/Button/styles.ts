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
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:before {
    background: rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
