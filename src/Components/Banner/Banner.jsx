import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
<div className="hero bg-base-200 px-32 py-20 rounded-xl">
  <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-8">Books to freshen up <br /> your bookshelf</h1>
      <button className="bg-[#23BE0A] text-white text-xl font-bold py-4 px-7 rounded-lg">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;