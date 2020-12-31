import { Link, BrowserRouter } from 'react-router-dom'

import {Container, Titulo, Button} from './style'

const Header: React.FC = () => {



  return (
      <Container>
          <Titulo>Biblioteca</Titulo>
          <Button>
            <BrowserRouter>
              <Link to={'/add'}>Adicionar Livro</Link>
            </BrowserRouter>
             
           
          </Button>
      </Container>
     
  )
}

export default Header;