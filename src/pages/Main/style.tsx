import styled from 'styled-components';

export const Container = styled.div`
   
    width: 1200px;
    margin: 100px auto;
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
    justify-content:space-between;
    
`
export const Icones = styled.div`
    margin: 20px;
    width: 370px;
    height: auto;
    display: flex;
    align-items:center;
    justify-content:space-around;
`
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
`

export const Modal = styled.div`
    position:absolute;
    border: 1px solid black;
    background: white;
    top : 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform : translate(-50%, -50%);
`

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
`