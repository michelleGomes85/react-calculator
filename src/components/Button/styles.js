import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 70px;
    height: 70px;
    background-color: #243F4A;
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
        background-color: #2F4F5E;
        transform: scale(1.05);
    }

    &:active {
        background-color: #1B2E38;
        transform: scale(0.95);
    }
`;
