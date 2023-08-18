import bannerImg from "../../../assets/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div className='relative flex mb-10'>
      <img src={bannerImg} alt='banner img' className='h-[500px] w-2/3' />
      <div className='h-[500px] bg-[#E80000] w-1/3 text-white'>
        <h2
          // className='font-semibold text-6xl text-white'
          className='lg:absolute right-96 bg-[#E80000] p-2 text-4xl font-bold'
          data-aos='fade-left'
          data-aos-anchor='#example-anchor'
          data-aos-offset='500'
          data-aos-duration='500'
        >
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
