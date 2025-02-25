import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`

    background-color: #FFFFFF;
    width: 80%;
    min-height: 350px;
    max-width: 250px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
`

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`