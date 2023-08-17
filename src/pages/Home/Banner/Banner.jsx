import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className='flex'>
      <img src={bannerImg} alt='banner img' className='h-[500px] w-2/3' />
      <div className='h-[500px] bg-[#E80000] w-1/3 justify-center items-center'>
        <h2 className='font-semibold text-6xl text-white'>
          Crespo Fried Chicken
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus.
        </p>
        <button className='btn'>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
