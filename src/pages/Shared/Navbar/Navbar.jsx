import useAuth from "../../../hooks/useAuth";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import defaultUser from "../../../assets/defaultuser.png";

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
            <Link to='/blogs'>Blogs</Link>
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
      <nav className='navbar bg-base-100'>
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
          <div className='btn btn-ghost normal-case text-xl'>
            <Logo />
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <div className='relative'>
              <img
                className='w-12 h-12 rounded-full border-2 border-white mr-3'
                src={user.photoURL}
                alt='profile picture'
                data-tooltip-id='my-tooltip'
                data-tooltip-content={user.displayName}
              />
              <Tooltip id='my-tooltip' />
            </div>
          ) : (
            <>
              <img
                className='w-12 h-12 rounded-full border-2 border-white mr-3'
                src={defaultUser}
                alt='default user picture'
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
