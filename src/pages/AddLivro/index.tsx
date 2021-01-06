import React from 'react';

 import { Container, Label, Input, Button} from './style';

const AddLivro: React.FC = () => {
  return (
   <Container>
      <Label>Título</Label>
      <Input type="text"/>
      <Label>Autor</Label>
      <Input type="text"/>
      <Label>Editora</Label>
      <Input type="text"/>
      <Label>Foto Capa</Label>
      <Input type="url" placeholder="Url da foto"/>

      <Button>Enviar</Button>
   </Container>
  );
}

export default AddLivro;