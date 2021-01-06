import styled from 'styled-components';

export const Box = styled.div`
    margin: 130px auto;
    width:auto;
  
`

export const Container = styled.div`
    width: 1200px;
    margin: auto;
    padding: 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-row-gap: 2em;
    grid-column-gap: 10px;
`;

export const Card = styled.div`
    width: 350px;
    padding: 20px;
    background: #fff;
    box-shadow: 6px 7px 10px 7px #afaeae;
    border-radius:8px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const Icones = styled.div`
    margin: 20px;
    width: 370px;
    height: auto;
    display: flex;
    align-items:center;
    justify-content:space-around;
`;
export const Titulo = styled.h1`
    margin: 20px;
    text-align:center;
    font-size: 18px;
    color:#2e2d2d;
`
export const P = styled.p`
    margin:7px;
    font-size: 14px;
    color: #2e2d2d;
`;



export const Button = styled.button`
    width:30;
    padding: 5px;
    height:auto;
    border:none;
    border-radius: 5px;
    background:transparent;
    transition: 500ms;
    cursor: pointer;

    &:hover{
        background: #c8d3fc;
        transform: scale(1.2)
    }
`;


export const Plus = styled.button`
    margin:10px 1100px;
    width:120px;
    height:auto;
    border:none;
    border-radius: 5px;
    background:transparent;
    transition: 500ms;
    cursor: pointer;

    display: flex;
    align-items:center;
    justify-content:center;

    &:hover{
        transform: scale(1.1)
    }
`;

