import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className='bg-red-100 h-screen flex justify-center items-center'>
        <div className='bg-white p-8 shadow-md rounded-md w-96'>
          <h1 className='text-2xl font-semibold text-red-700 mb-4'>Sign Up</h1>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='photoURL'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Photo URL
              </label>
              <input
                type='url'
                id='photoURL'
                name='photoURL'
                className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200'
            >
              Sign Up
            </button>
          </form>
          <p className='mt-4 text-sm text-gray-600'>
            Already have an account?{" "}
            <Link to='/login' className='text-red-500 hover:underline'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
