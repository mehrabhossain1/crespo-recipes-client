import useAuth from "../../../hooks/useAuth";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!", {
          duration: 3000,
        });
      })
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      {user ? (
        <>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Blogs</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navOptions}
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>
            <Logo />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            {navOptions}
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <div>profime pic</div>
            </>
          ) : (
            <>
              <button>sing up</button> <button>login</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
