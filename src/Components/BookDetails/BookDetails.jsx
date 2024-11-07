import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utility/addToDB";
import { addToStoreWishList } from "../../utility/addToWB";

const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    // console.log(book);

    const {bookId: bId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;
    

    const handleRead = (id) => {


        // 1. understand what to store or serve: => bookId
        // 2. where to store: database
        // 3. array, list, collection:
        // 4. check: if the book is already in the readList
        // 5. if not, then add the book to the list
        // 6. if yes, don't add the book

        addToStoreReadList(id)
    }


    const handleWishList = (id) => {
        addToStoreWishList(id);
    }

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">

            <div className="bg-[#F3F3F3] p-20 rounded-xl inline-flex justify-center items-center">
                <img className="w-[420px]" src={image} alt={bookName} />
            </div>

            <div>
                <h2 className="text-[#131313] text-4xl font-bold mb-4">{bookName}</h2>
                <p className="text-xl font-medium mb-6">By : {author}</p>
                <hr className="mb-6" />
                <p>{category}</p>
                <hr className="my-6" />
                <p className="mb-4"><span className="text-base font-bold">Review</span>: <span className="text-gray-500 text-base font-medium">{review}</span></p>
                <div><span className="text-base font-bold mr-8">Tag</span> 
                {
      tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-[#23BE0A] text-base font-medium">#{tag}</button>)
    }
                </div>
                <hr className="my-6" />
                <p className="mb-4"><span className="text-gray-500 text-base font-medium mr-12">Number of pages:</span> <span className="text-base font-semibold">{totalPages}</span></p>
                <p><span className="text-gray-500 text-base font-medium mr-[108px]">Publisher:</span> <span className="text-base font-semibold">{publisher}</span></p>
                <p className="my-4"><span className="text-gray-500 text-base font-medium mr-[45px]">Year of Publishing:</span> <span className="text-base font-semibold">{yearOfPublishing}</span></p>
                <p><span className="text-gray-500 text-base font-medium mr-[123px]">Ratings:</span> <span className="text-base font-semibold">{rating}</span></p>

                <p className="mt-8"><button onClick={() => handleRead(bId)} className="text-lg font-semibold border py-4 px-7 mr-4 rounded-lg hover:bg-black hover:text-white">Read</button>

             <button onClick={() => handleWishList(id)} className="bg-[#50B1C9] text-white text-lg font-semibold py-4 px-7 rounded-lg hover:bg-white hover:text-black hover:border">Wishlist</button></p>


            </div>

        </div>
    );
};

export default BookDetails;