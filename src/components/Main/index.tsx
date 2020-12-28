import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import { Container, Card, Icones} from './style'

import api from '../../services/api'

interface Book {
    titulo:String,
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
}, [])


  return (
      <Container>
          {books?.map( book =>{
              return(
                <Card>

                <img src={book.foto} alt={`Imagem de ${book.titulo}`} width={275}/>
  
              <Icones>
                <a href="#"><FiEdit size={30} color="rgba(5,60,255,1)"/></a>
                <a href="#"><FiTrash2 size={30} color="red"/></a>
              </Icones>
                
                
            </Card>
      
              )
          })}
 
      </Container>
  );
}

export default Main;