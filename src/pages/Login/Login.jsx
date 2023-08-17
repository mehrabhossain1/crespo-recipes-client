import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    try {
      signInUser(data.email, data.password).then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        toast.success("Login Successful", {
          duration: 3000,
        });
        navigate(from, { replace: true });
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className='bg-red-100 h-screen flex justify-center items-center'>
        <div className='bg-white p-8 shadow-md rounded-md w-96'>
          <h1 className='text-2xl font-semibold text-red-700 mb-4'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                type='password'
                id='password'
                name='password'
                className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200'
            >
              Login
            </button>
          </form>
          <p className='mt-4 text-sm text-gray-600'>
            Don't have an account?{" "}
            <Link to='/signup' className='text-red-500 hover:underline'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
