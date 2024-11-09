import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDB';
import Book from '../Book/Book';
import ReadListBook from '../ReadListBook/ReadListBook';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {

    const [readListBook, setReadListBook] = useState([]);

    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storeReadList = getStoredReadList();
        

        const storeReadListInt = storeReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId));

        // console.log(storeReadList, allBooks, storeReadListInt);

        setReadListBook(readBookList);


    } , []);


    const handleSort = (sortType) => {
        setSort(sortType);

        if(sortType === 'Number of pages'){
            const sortedReadList = [...readListBook].sort((a, b) => a.totalPages - b.totalPages);
            setReadListBook(sortedReadList);
        }

        if(sortType === 'Rating'){
            const sortedReadList = [...readListBook].sort((a, b) => a.rating - b.rating);
            setReadListBook(sortedReadList);
        }
    }



    return (
        <div className='max-w-7xl mx-auto'>

          <Helmet>
            <title>Boi Poka | Listed Books</title>
          </Helmet>


<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">
    {
       sort ? `Sort By: ${sort}` : 'Sort By'
    }
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
    <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
  </ul>
</div>
            

            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      

      <div className='grid grid-cols-1 gap-8 py-12'>

      {
        readListBook.map(book => <ReadListBook key={book.bookId} book={book}></ReadListBook>)
      }

      </div>


    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;