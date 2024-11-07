import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('../../../public/BooksData/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } , [])

    return (
        <div>
            <h2 className="text-[#131313] text-4xl font-bold text-center mb-9 mt-24">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;



            // load data

// 1. state to store book
// 2. useEffect
// 3. fetch to load data
// 4. set the date to the books state