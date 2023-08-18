const ChefSection = () => {
  return (
    <>
      <div className='chef-section bg-[#E80000] text-white p-4 text-center'>
        <img
          className='chef-picture w-32 h-32 rounded-full mx-auto mb-2'
          src={
            "https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg"
          }
          alt='Chef Picture'
        />
        <div className='chef-name text-2xl font-bold mb-1'>Chef Name</div>
        <div className='years-of-experience text-lg mb-1'>
          Years of Experience: 10
        </div>
        <div className='number-of-recipes text-lg mb-1'>
          Number of Recipes: 150
        </div>
        <div className='likes text-lg mb-1'>Likes: 5000</div>
        <button className='view-recipes-button bg-white text-[#E80000] border-none py-2 px-4 text-lg rounded cursor-pointer transition duration-300 hover:bg-[#E80000] hover:text-white'>
          View Recipes
        </button>
      </div>
    </>
  );
};

export default ChefSection;
