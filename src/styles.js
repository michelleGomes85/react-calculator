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
    gap: 10px;
    justify-content: center;
`

export const Content = styled.div`

    background-color: #FFFFFF;
    width: 95%;
    min-height: 350px;
    max-width: 450px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 10px;
`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`