import React, {Component} from 'react'
import Book from './Book';

class BookList extends Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.props.addToWishlist(book);
    }

    render(){
        return(
            <div>
                <h1>BookList</h1>
                {
                    this.state.books.map((currentBook)=>{
                        return <Book key={currentBook.id} book={currentBook} addToWishlist={this.addToWishlist}/>
                    })
                }
            </div>
        )
    }
}

export default BookList;