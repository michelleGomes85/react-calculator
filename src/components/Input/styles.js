import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #243f4a;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.1);

  font-size: 24px;
  font-family: Roboto;
  color: #FFFFFF;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0;
    text-align: right;
    font-size: 32px;
    color: #FFFFFF;
    padding-right: 15px;
    outline: none;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`;


