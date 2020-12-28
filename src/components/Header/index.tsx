
import React from 'react';
import {Container, Titulo, Button} from './style'


const Header: React.FC = () => {
  return (
      <Container>
          <Titulo>Biblioteca</Titulo>
          <Button href="#">Adicionar Livro</Button>
      </Container>
     
  )
}

export default Header;