import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import {useParams} from 'react-router-dom'
import { Container, Card, Icones, Titulo, P} from './style'

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
}, [])



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
                  
                  <a href="#"><FiEdit size={30} color="rgba(5,60,255,1)"/></a>
                  <a href={`https://devchallenge-biblioteca.herokuapp.com/delete/${book._id}`}>
                    <FiTrash2 size={30} color="red"/>
                  </a>

                </Icones>
                  
                  
              </Card>
      
              )
          })}
 
      </Container>
  );
}

export default Main;