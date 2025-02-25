import styled from 'styled-components';

export const ButtonContainer = styled.button`

    width: 80px;
    height: ${(props) => (props.className === 'button-equals' ? '150px' : '70px')};

    background-color: ${(props) =>
        props.className === 'button-clear'
            ? '#FF6B6B'
            : props.className === 'button-equals'
            ? '#4CAF50' 
            : '#243F4A'}; // Cor padrão

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
        background-color: ${(props) =>
            props.className === 'button-clear'
                ? '#FF4C4C' 
                : props.className === 'button-equals'
                ? '#45A049' 
                : '#2F4F5E'}; 
        transform: scale(1.05);
    }

    &:active {
        background-color: ${(props) =>

            props.className === 'button-clear'
            
                ? '#E53E3E'
                : props.className === 'button-equals'
                ? '#3D8B40'
                : '#1B2E38'};

        transform: scale(0.95);
    }
`;