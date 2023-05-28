import {useState} from 'react'

/*======================= Testing context
import { useContext } from 'react';
import BookContext from '../Contexts/book';
==========================*/

function Book({Book,EditBook,DeleteBooks}){
    const [ediStatus,changeEditStatus] = useState(false);
    const [editing,updateEditing]= useState('');
        /*=================================================*/
    const deleter=()=>{
        DeleteBooks(Book.id);
      }
      const Editor=()=>{
          if(ediStatus){
              changeEditStatus(false);
          console.log(ediStatus);}
          else
          {   
              console.log(ediStatus);
              changeEditStatus(true);
          }
      }
  
        /*=================================================*/
    const stoper =(event)=>{
        event.preventDefault();
        console.log(editing);
        EditBook(Book.id,editing);
        updateEditing('');
        changeEditStatus(false);
    }
    const update = (event) =>{
        updateEditing(event.target.value);
    }

        /*=================================================*/
    let titleView = <div className='title' value={editing}>{Book.title}</div>;
    if(ediStatus){titleView = <div>
                <form onSubmit={stoper} >
                    <input onChange={update} value={editing}/>
                    <button>Save</button>
                </form>
            </div>;
    }
    else{
        titleView = <div className='title' value={editing}>{Book.title}</div>;
    }
         /*=========Testing context===
        let value = useContext(BookContext);
         console.log(value);
         ========================*/

    return <div className='Book'>
        <div className="TopLine">

            <div className='IdBox'>{Book.id} </div>

            <div className="Icons">
                <div><button className="ExitButton" onClick={deleter}>X</button></div>
                <div><button className="EditButton" onClick={Editor}>E</button></div>
            </div>
        </div>
        <div className="image"><img alt="tester" src={`https://picsum.photos/seed/${Book.id}/130/130`} /></div>
        <br/> 
        <div className="EditorSection">
            {titleView}
        </div>
        </div>
}


export default Book;