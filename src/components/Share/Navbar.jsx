import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const logoutHandel = () => {
    logOut()
      .then(() => {
        navigate("/login")
        toast.success("Successfully logged out")
      })
      .catch(error => console.error(error))
  }
  const NavLink = <>
    <Link className="font-semibold text-base" to={'/'}>Home</Link>
    <Link className="font-semibold text-base" to={'/all-food-items'}>All Food Items</Link>
    <Link className="font-semibold text-base" to={'/blog'}><a>Blog</a></Link>
  </>

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="  menu  menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 gap-4">

            {NavLink}

          </ul>
        </div>
        <Link to={'/'} className="font-bold  normal-case text-2xl">Taste<span className="text-[#f56511]">Bazaar</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 ">
          {NavLink}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {/* <Link to={'/login'} className="font-semibold text-base">login</Link>
        <Link to={'/register'} className="font-semibold text-base">Register</Link>
        <Link className="font-semibold text-base">logOut</Link> */}
        {
          user ? <><button className="font-semibold" onClick={logoutHandel}>Log Out</button>
            <div>
              <details className="dropdown dropdown-end ">
                <summary className=" btn bg-white outline-none border-none"><div className="avatar">
                  <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-7">
                    <img src={user.photoURL} />
                  </div>
                </div></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                  <Link><button className="btn btn-ghost normal-case text-base">My added food items</button></Link>
                  <Link><button className="btn btn-ghost normal-case text-base">Add a food item</button></Link>
                  <Link><button className="btn btn-ghost normal-case text-base">My order</button></Link>
                </ul>
              </details>
            </div>
          </> : <>
            <div className="flex gap-3 pr-4">
            <Link to="/login" className="font-semibold">Login</Link>
            <Link to="/register" className="font-semibold  ">Register</Link>
            </div>
          </>

        }




      </div>
    </div>
  );
};

export default Navbar;