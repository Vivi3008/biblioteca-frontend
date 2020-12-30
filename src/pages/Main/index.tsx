import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'


import { Container, Card, Icones, Titulo, P, Button} from './style'

import api from '../../services/api'

interface Book {
    _id: string,
    titulo:String
    editora:String,
    foto:string,
    autores:Array<
        string
    >
}


const Main: React.FC = () => {
    const [books, setBooks] = useState<Book[]>()


    
useEffect(()=>{
    api.get('/list').then(({data})=>{
       setBooks(data)
    })
}, [books])

function deleteBook(id: string){
  if(window.confirm("Tem certeza que deseja excluir o livro?")){
    let password = prompt("Digite a senha:")
    if(password === '519813') {
      api.delete(`delete/${id}`).then(()=>{
        alert('Livro excluído com sucesso!')
      })
    } else {
      alert('Senha Incorreta! Não foi possível excluir o livro!')
    }
      
  }
}

  return (
      <Container>
          {books?.map( book =>{
              return(
              <Card key={book._id}>
                  
                  <img src={book.foto} alt={`Imagem de ${book.titulo}`} width={100}/>
                  <Titulo>{book.titulo}</Titulo>

                  {book.autores.map( autor => {
                    return <P>{autor}</P>
                  })}

                  <P>Editora: {book.editora}</P>
               
                <Icones>
                  
                 <Button>
                   <FiEdit size={20} color="rgba(5,60,255,1)"/>
                   </Button>

                 <Button onClick={()=> deleteBook(book._id)}>
                   <FiTrash2 size={20} color="red"/>
                 </Button>

                </Icones>
                  
                  
              </Card>
      
              )
          })}

         
 
      </Container>
  );
}

export default Main;