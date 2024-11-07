import { BsPeopleFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const ReadListBook = ({book}) => {

    const {rating ,image, bookName, author, tags, category, yearOfPublishing, publisher, totalPages} = book;

    return (
        <div className="flex items-center gap-8 border p-6 rounded-xl">
            <div className="bg-[#1313130d] py-7 px-12 rounded-xl">
                <img className="h-[220px]" src={image} alt="" />
            </div>
            <div>
                <h3 className="text-[#131313] text-2xl font-bold">{bookName}</h3>
                <p className="text-[#131313cc] text-base font-medium my-4">By: {author}</p>

                <div className="flex items-center gap-8 mb-6">
                    <span className="text-[#131313] text-base font-bold">Tag</span>
    {
      tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-[#23BE0A] text-base font-medium">{tag}</button>)
    }

    <span className="inline-flex items-center gap-3 text-base font-medium text-[#131313cc]"><IoLocationOutline></IoLocationOutline> Year of Publishing: {yearOfPublishing}</span>
    </div>

    <div className="flex items-center gap-5 text-[#13131399] mb-4">
        <p className="inline-flex items-center"><BsPeopleFill className="mr-2"></BsPeopleFill> Publisher: {publisher}</p>
        <p className="inline-flex items-center"><FaAddressBook className="mr-3"></FaAddressBook> Pages: {totalPages}</p>
    </div>
    <hr className="my-7" />

    <div>
    <button className="py-[6px] px-3 rounded-3xl bg-[#328eff26] text-[#328EFF] text-base font-normal">Category: {category}</button> 
    <button className="py-[6px] px-3 rounded-3xl bg-[#ffac3326] text-[#FFAC33] text-base font-normal mx-4">Rating: {rating}</button>
    <button className="py-[6px] px-3 rounded-3xl bg-[#23BE0A] text-white text-base font-normal">View Details</button>
    </div>

            </div>
        </div>
    );
};

export default ReadListBook;