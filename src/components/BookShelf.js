import Book from './Book'
import '../Component_style/Book.css'
import '../Component_style/BookShelf.css'




function BookShelf ({Books,EditBook,DeleteBooks}){
    /*------------------*/
    const BookMaker = (Open_Book) => {
        return <Book Book={Open_Book} EditBook={EditBook} DeleteBooks={DeleteBooks}/>
      };

    /*------------------*/

    const Books_as_jsx = Books.map(BookMaker);

    return <div className='BookShelf'>
            {Books_as_jsx}
    </div>
}

export default BookShelf;