import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerInput = styled.div`
    
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Content = styled.div`

    background-color: #FFFFFF;
    width: 95%;
    min-height: 350px;
    max-width: 450px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 14px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;