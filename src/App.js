import {useEffect, useState} from 'react';
import axios from 'axios'
import CreateBook from './components/CreateBook'
import BookShelf from './components/BookShelf'


/*=========== Testing context
import { useContext } from 'react';
import BooksContext from './Contexts/book'
===============*/

import './Component_style/BookShelf.css'


function App(){
    const [Books,updateBooks]= useState([]);

    useEffect( ()=>{fetchBooks();},[]);

    const fetchBooks = async()=>{
        const response = await axios.get('http://localhost:3001/books/');
        const serverData = [...response.data];
        updateBooks(serverData);
        console.log(serverData);
    }

/*------------------------------------*/
    const AddBook= async(title)=>{
        const response = await axios.post('http://localhost:3001/books',
        {title}
        );
        console.log(response.data);
        console.log(`Book added and it's ID is :`,response.data.id);
        let id = response.data.id;
        updateBooks([...Books,{id,title}]);   
    }
/*------------------------------------*/
    const EditBooks = async (id,value)=>{

        await axios.put('http://localhost:3001/books/'+id ,{title:value}); 


        const UpdatedBooks = Books.map((element)=>{
            if (element.id===id){
                element.title=value;
                return element;
            }
            return element;


        });
        updateBooks(UpdatedBooks);
        
    }
    /*------------------------------------*/
    const DeleteBooks= async(id)=>{
        let response = await axios.delete('http://localhost:3001/books/'+id); 
        console.log("DeleteBooksfunction trigered with id",response.data);
        const UpdatedBooks = Books.filter((element)=>{
            return element.id!==id;
        });
        updateBooks(UpdatedBooks);
        
    }

    /*---------Testing Context --------------
        let value = useContext(BookContext);
         console.log(value);
   ------------------------------------*/
   
    return(
   <div className='BodyM'>
        
        <CreateBook onChange={AddBook}/>
        <BookShelf Books={Books} EditBook={EditBooks} DeleteBooks={DeleteBooks}/>
        
    </div>
    )
}

export default App;