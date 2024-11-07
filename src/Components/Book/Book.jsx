import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const {bookId ,image, bookName, author, tags, category} = book;


    return (

      <Link to={`/books/${bookId}`}>

<div className="card bg-base-100 border p-6">
  <figure className="bg-[#F3F3F3] py-8 rounded-xl">
    <img
    className="h-[166px]"
      src={image}
      alt={bookName}
       />
  </figure>
  <div className="card-body">

    <div className="flex items-center gap-8 mb-4">
    {
      tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-[#23BE0A] text-base font-medium">{tag}</button>)
    }
    </div>

    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By : {author}</p>
    <hr className="border border-dashed my-4"/>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
  
      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
  
    </div>

  </div>
</div>

      </Link>

    );
};

export default Book;