import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    margin: 30px auto;
    padding: 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-row-gap: 2em;
    grid-column-gap: 10px;
`;

export const Card = styled.div`
    width: 275px;
    background: #fff;
    box-shadow: 6px 7px 10px 7px #afaeae;
    border-radius:8px;
    height: 400px;
`

export const Icones = styled.div`
    width: 275px;
    height: auto;
    display: flex;
    align-items:center;
    justify-content:space-between;
`


