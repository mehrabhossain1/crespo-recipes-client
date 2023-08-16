import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    try {
      console.log(data);
      createUser(data.email, data.password).then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        toast.success("User Created Successfully", {
          duration: 3000,
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //   password validation
  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~-]/.test(value)) {
      return "Password must contain at least one special character";
    }
    return true;
  };

  return (
    <>
      <div className='bg-red-100 h-screen flex justify-center items-center'>
        <div className='bg-white p-8 shadow-md rounded-md w-96'>
          <h1 className='text-2xl font-semibold text-red-700 mb-4'>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type='text'
                id='name'
                name='name'
                className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-300"
                }`}
              />
              {errors.name && (
                <span className='text-red-500 text-xs mt-1'>
                  Name is required
                </span>
              )}
            </div>
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
                className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-300"
                }`}
              />
              {errors.email && (
                <span className='text-red-500 text-xs mt-1'>
                  Email is required
                </span>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  validate: validatePassword,
                })}
                type='password'
                id='password'
                name='password'
                className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-300"
                }`}
              />
              {errors.password && (
                <span className='text-red-500 text-xs mt-1'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='photoURL'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type='url'
                id='photoURL'
                name='photoURL'
                className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring ${
                  errors.photoURL
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-300"
                }`}
              />
              {errors.photoURL && (
                <span className='text-red-500 text-xs mt-1'>
                  Photo URL is required
                </span>
              )}
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
