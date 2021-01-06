import styled from 'styled-components';

export const Container = styled.div`
  width:500px;
  padding:20px;
  border: 1px solid #8a8888;
  border-radius: 8px;
  background:#f7e6e6;
  margin:130px auto;

  display:flex;
  flex-direction:column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 400px;
  margin: 5px;
  padding: 5px;
  background: transparent;
  border: 2px solid #637fda;
  border-radius: 5px;
  outline:none;

  &:focus{
    border: 2px solid green;
  }
`
export const Label = styled.label`
  font-size: 14pt;
  letter-spacing: 0.02px;
`

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  margin: 15px auto;
  border: 2px solid #2e2b2b;
  border-radius: 5px;
  background: transparent;
  transition: all 500ms;
  cursor:pointer;

  &:hover{
    border: 2px solid green;
    transform: scale(1.1);
    font-size: 14px;
  }
`