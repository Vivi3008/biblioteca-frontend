import styled from 'styled-components';

export const Container = styled.div`
    margin:0;
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top:0;
    left:0;
    right:0;
   
    height: 100px;
    padding: 20px;
    background: #5364bb;
    /* background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); */
`;


export const Titulo = styled.h1`
    font-size: 24px;
    color:#fff;
`;

export const Button = styled.a`
    font-size:18px;
    color:#fff;
    text-decoration:none;
    background: transparent;
    cursor:pointer;
    padding: 10px;
    border: solid 2px #fff;
    border-radius: 5px;
    transition: 600ms;

    &:hover{
        border: solid 4px #FFF;
        padding:12px;
        font-size: 20px;
    }
`
