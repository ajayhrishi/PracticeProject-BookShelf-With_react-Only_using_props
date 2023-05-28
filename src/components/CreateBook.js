import '../Component_style/CreateBook.css'

import {useState} from 'react'
function CreateBook({onChange}){
    const [title,changetitle]= useState('');


    const capture = (event)=>{
            changetitle(event.target.value);
            
    }
    const stoper = (event)=>{
        event.preventDefault();
        onChange(title);
        changetitle('');

}

/*-----------------------------------------------------*/
    return <div id='aligner'>
    <div id='searchBox'>
            <form onSubmit={stoper}>
                <label id='SeachLabel'>Enter The Name of the Book you wish to Add.</label>
                <input value={title} onChange={capture} id='inputBox'/>
                <button id='Button' >Add Book</button>
            </form>
    </div>
    </div> 

}

export default CreateBook;