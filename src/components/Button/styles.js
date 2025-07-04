import styled from 'styled-components';

export const ButtonContainer = styled.button`
  flex: 1;
  aspect-ratio: ${(props) =>
    props.className === 'button-equals' ? '1 / 2.1' : '1 / 1'};

  min-width: 60px;
  max-width: 100px;

  background-color: ${(props) =>
    props.className === 'button-clear'
      ? '#FF6B6B'
      : props.className === 'button-equals'
      ? '#4CAF50'
      : '#243F4A'};

  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  border: 2px solid #1B2E38;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

@media (max-width: 600px) {
    height: auto;                  
    font-size: 18px;
  }
`;
