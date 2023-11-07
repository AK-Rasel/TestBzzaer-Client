import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  // console.log(user)
  const logoutHandel = () => {
    logOut()
      .then(() => {
        navigate("/login")
        toast.success("Successfully logged out")
      })
      .catch(error => console.error(error))
  }
  const NavBarLink = <>

    <li className="font-semibold text-lg"><NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
      }
    >
      Home
    </NavLink></li>
    <li className="font-semibold text-lg"><NavLink
      to="/all-food-items"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
      }
    >
      All Food Items
    </NavLink></li>
    <li className="font-semibold text-lg"><NavLink
      to="/blog"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
      }
    >
      Blog
    </NavLink></li>
  </>

  return (
    <div className="navbar container mx-auto shadow-lg p-4 lg:p-8 rounded-full mb-6  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="  menu  menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52 gap-5">

            {NavBarLink}

          </ul>
        </div>
        <Link to={'/'} className="font-bold  normal-case text-3xl">Taste<span className="text-[#f56511]">Bazaar</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="   menu-horizontal px-1 gap-6  ">

          {NavBarLink}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {/* <Link to={'/login'} className="font-semibold text-base">login</Link>
        <Link to={'/register'} className="font-semibold text-base">Register</Link>
        <Link className="font-semibold text-base">logOut</Link> */}
        {
          user ? <>
            <div>
              <details className="dropdown dropdown-end ">
                <summary className=" btn hover:bg-white bg-white outline-none border-none"><div className="avatar">
                  <div className=" rounded-full ring ring-[#f56511] ring-offset-base-100 ring-offset-2 w-7">
                    <img src={user.photoURL} />
                  </div>
                </div></summary>
                <ul className="p-8 shadow space-y-2  dropdown-content z-10 bg-base-100 rounded-box w-52 ">
                  <li className="font-semibold text-base underline"><p>{user.displayName}</p></li>

                  <li className="font-semibold text-base"><NavLink
                    to="/my-food-items"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
                    }
                  >
                    My food items
                  </NavLink></li>

                  <li className="font-semibold text-base"><NavLink
                    to="/added-food-item"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
                    }
                  >
                    Add food item
                  </NavLink></li>

                  <li className="font-semibold text-base"><NavLink
                    to="/order"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
                    }
                  >
                     Ordered items
                  </NavLink></li>


                 <li className="bg-[#f56511] text-white  px-3 py-1 rounded-full text-center"> <button className=" font-semibold text-base" onClick={logoutHandel}>Log Out</button></li>
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