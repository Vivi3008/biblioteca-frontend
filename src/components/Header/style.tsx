import styled from 'styled-components';

export const Container = styled.div`
    margin:0;
    display: flex;
    align-items:center;
    justify-content: space-between;

    height: 100px;
    padding: 20px;
    background: rgb(5,60,255);
    background: linear-gradient(90deg, rgba(5,60,255,1) 28%, rgba(255,187,68,1) 76%);
`;


export const Titulo = styled.h1`
    font-size: 24px;
    color:#fff;
`;

export const Button = styled.a`
    font-size:18px;
    color:#fff;
    text-decoration:none;
    padding: 10px;
    border: solid 2px #fff;
    border-radius: 5px;

    &:hover{
        transform: scaleX(1);
    }
`
